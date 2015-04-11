var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var db = req.db;
    db.wellington_house_listings.find({}).toArray(function (err, docs) {
        res.json(docs);
    });
});

var MAX_DISTANCE_M = 100000;
var STARTING_DISTANCE_M = 100;
var INCR_M = 100;

router.get('/nearest_bus_stop', function (req, res) {
    var db = req.db;
    var lat = parseFloat(req.query.lat);
    var lng = parseFloat(req.query.lng);
    query = {
        "geometry" : {
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
    //var current_distance = STARTING_DISTANCE_M;
    //var query;
    //var isFound = false;
    //for (; current_distance < MAX_DISTANCE_M; current_distance += INCR_M) {
    //    console.log("Searching nearest bus stop to lng " + lng + " lat " + lat + "at distance " + current_distance);
    //    query = {
    //        $near: {
    //            $geometry: {
    //                type: "Point",
    //                coordinates: [lng, lat]
    //            },
    //            $maxDistance: current_distance
    //        }
    //    };
    //    db.wellington_bus_stops.findOne(query, function (err, doc) {
    //        if (doc !== undefined) {
    //            console.log("YAY!");
    //            isFound = true;
    //            res.json(doc);
    //        } else {
    //            console.log("Didn't find one..");
    //        }
    //    });
    //}
    //if (!isFound) {
    //    console.log("No where near any bus stop!");
    //}
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