var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index');
});

/* GET users listing. */
router.get('/listings', function (req, res) {
    var db = req.db;
    db.wellington_house_listings.find({}).toArray(function (err, docs) {
        res.json(docs);
    });
});

var MAX_DISTANCE_M = 100000;

function specialSort(a, b) {
    if (a.finalScore < b.finalScore) {
        return 1;
    }
    if (a.finalScore > b.finalScore) {
        return -1;
    }
    return 0;
}

router.get('/suburbs', function (req, res) {
    var db = req.db;
    if (req.query.climateScore === undefined && req.query.housingScore === undefined && req.query.transportScore === undefined) {
        res.json({'error': 'you are missing either climateScore, housingScore or transportScore as a GET param'})
    }
    var climateScore = parseInt(req.query.climateScore);
    var housingScore = parseInt(req.query.housingScore);
    var transportScore = parseInt(req.query.transportScore);
    //{housingScore: {$gte: housingScore}, transportScore: {$gte: transportScore}}
    db.wellington_suburb_boundaries.find().toArray(function (err, docs) {
        console.log("Got all suburb data of " + docs.length + " docs");
        var lookupArray = [];
        docs.forEach(function (doc) {
            console.log("Calculating score for " + doc.properties.suburb);
            var finalScore = doc.windScore * climateScore + doc.housingPriceScore * housingScore + doc.transportScore * transportScore;
            lookupArray.push({"id": doc._id, "finalScore": finalScore, "name": doc.properties.suburb});
        });
        lookupArray.sort(specialSort);
        //lookupArray.forEach(function (doc) {
        //    console.log("lll " + doc.finalScore);
        //});
        var winnerArray = lookupArray.slice(0,5);
        var idArray = [];
        winnerArray.forEach(function (winner) {
            console.log("highest score = " + winner.finalScore + " for " + winner.name);
            idArray.push(winner.id);
        });
        db.wellington_suburb_boundaries.find({_id:{ $in: idArray}}).toArray(function (err, docs) {
            res.json(docs)
        });
    });
});

router.get('/wind_score_per_suburb', function (req, res) {
    var db = req.db;
    db.wellington_suburb_boundaries.findOne({'properties.suburb': req.query.name}, {'geometry': 1}, function (err, doc) {
        query = {
            "geometry": {
                $geoIntersects: {
                    $geometry: {
                        type: "Polygon",
                        coordinates: doc.geometry.coordinates
                    }
                }
            }
        };
        db.wellington_wind_zones.find(query).toArray(function (err, docs) {
            console.log("Found " + docs.length + " wind zones for " + req.query.name);
            var sum = 0;
            var processedLength = 0;
            docs.forEach(function (doc) {
                if (doc.properties.wind_code == 5 || doc.properties.wind_code > 7) { // Ignore
                    console.log("Wind code is SPECIAL_DATA, ignoring data point")
                } else {
                    console.log("Found wind code of " + doc.properties.wind_code + ", processing it.");
                    var value = doc.properties.wind_code;
                    if (value == 6) { // Mapping 6 down to 5 for score calculation
                        value--;
                    }
                    sum += parseFloat(value);
                    processedLength++;
                }
            });
            var score = sum / processedLength;
            var result = {};
            result["score"] = score;
            res.json(result);
        });
    });
});

router.get('/nearest_bus_stop', function (req, res) {
    var db = req.db;
    var lat = parseFloat(req.query.lat);
    var lng = parseFloat(req.query.lng);
    query = {
        "geometry": {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: MAX_DISTANCE_M
            }
        }
    };
    db.wellington_bus_stops.findOne(query, function (err, doc) {
        if (doc != undefined) {
            console.log(doc);
            isFound = true;
            res.json(doc);
        } else {
            console.log("Didn't find one..");
        }
    });
});

router.get('/bus_stops', function (req, res) {
    var db = req.db;
    var lat = parseFloat(req.query.lat);
    var lng = parseFloat(req.query.lng);
    var rangeM = parseInt(req.query.rangeM);
    query = {
        "geometry": {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: rangeM
            }
        }
    };
    db.wellington_bus_stops.find(query).toArray(function (err, doc) {
        if (doc != undefined) {
            console.log(doc);
            res.json(doc);
        } else {
            console.log("Didn't find one..");
        }
    });
});

router.get('/bus_stops_per_suburb', function (req, res) {
    var db = req.db;
    db.wellington_suburb_boundaries.find({}).toArray(function (err, docs) {
        console.log("stating");
        docs.forEach(function (doc) {
            query = {
                "geometry": {
                    $geoWithin: {
                        $geometry: {
                            type: doc.geometry.type,
                            coordinates: doc.geometry.coordinates
                        }
                    }
                }
            };
            var containerDoc = {};
            db.wellington_bus_stops.find(query).toArray(function (err, doc) {
                console.log("Found " + doc.length + " stops");
                containerDoc.stops = doc;
                containerDoc.numStops = doc.length;
            });
            setTimeout(function () {
                db.wellington_suburb_boundaries.update({'properties.suburb': doc.properties.suburb}, {$set: {busStops: containerDoc}}, function (err, r) {
                    if (err !== null) {
                        console.log(err);
                    }
                    console.log(r + " documents with " + doc.properties.suburb + " updated!");
                });
            }, 1000);
        });
    });
    res.json([{"status": "done"}]);
});

router.get('/directions', function (req, res) {
    var gm = req.googlemaps;
    var startLat = parseFloat(req.query.startLat);
    var startLng = parseFloat(req.query.startLng);
    var endLat = parseFloat(req.query.endLat);
    var endLng = parseFloat(req.query.endLng);
    gm.directions(startLat + ',' + startLng, endLat + ',' + endLng, function (err, data) {
        res.json(data);
    })
});
var WEATHER_CODE_MAP = {
    '1': "mean",
    '2': 'mean', // Mean Air Temperature    Celsius
    '3': 'mean',  // Mean Daily Maximum Air Temperature  Celsius
    '4': 'mean',  // Mean Daily Minimum Air Temperature  Celsius
    '9': 'mean',  // Total Sunshine  Hours
    '33': 'mean',// Mean Wind Speed     M/Sec
    '61': 'mean', // Standard Deviation Of Daily Mean Temperature.   Celsius
    '64': "mean"
}; //Mean Of 9am Relative Humidity   Percent

router.get('/climate', function (req, res) {
    var db = req.db;
    db.wellington_suburb_boundaries.findOne({'properties.suburb': req.query.name}, {'geometry': 1}, function (err, doc) {
        query = {
            "geometry": {
                $geoWithin: {
                    $geometry: {
                        type: "Polygon",
                        coordinates: doc.geometry.coordinates
                    }
                }
            }
        };
        //console.log(doc);
        //console.log(doc.geometry.coordinates);
        var suburb_data = {};
        db.wellington_niwa_statistics.find(query, function (err, docs) {
            suburb_data = {
                '1': -999,
                '2': -999, // Mean Air Temperature    Celsius
                '3': -999,  // Mean Daily Maximum Air Temperature  Celsius
                '4': -999,  // Mean Daily Minimum Air Temperature  Celsius - doesnt work but cbf fixing
                '9': -999,  // Total Sunshine  Hours
                '33': -999,// Mean Wind Speed     M/Sec
                '61': -999, // Standard Deviation Of Daily Mean Temperature.   Celsius
                '64': -999
            };
            docs.toArray().forEach(function (doc) {
                console.log("current value = " + doc.value);
                if (suburb_data[String(doc.code)] > doc.value) {
                    suburb_data[String(doc.code)] = doc.value
                }
            });
        });
        res.json(suburb_data);
    });
});

router.get('/housing', function (req, res) {
    var db = req.db;
    var query = {};
    if (req.query.price_min === undefined && req.query.price_max === undefined) {
        res.json({"error": "You need to put at least a min or max"});
    } else if (req.query.price_min !== undefined && req.query.price_max !== undefined) {
        query["StartPrice"] = {$gte: parseInt(req.query.price_min), $lte: parseInt(req.query.price_max)};
    } else if (req.query.price_min !== undefined) {
        console.log("Price min");
        query["StartPrice"] = {$gte: parseInt(req.query.price_min)};
    } else if (req.query.price_max !== undefined) {
        query["StartPrice"] = {$lte: parseInt(req.query.price_max)};
    }
    db.wellington_house_listings.find(query).toArray(function (err, doc) {
        res.json(doc);
    });
});

module.exports = router;
