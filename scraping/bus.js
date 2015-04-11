var config = require('../config.json')['development'];
var mongoHostAndPortAndDatabase = config.mongoHost + ":" + config.mongoPort + '/' + config.mongoDatabase;
var db;
var db_url;
if (config.mongoUser !== undefined) {
    console.log("Using production settings");
    db_url = "mongodb://" + config.mongoUser + ":" + config.mongoPassword + "@" + mongoHostAndPortAndDatabase;
} else {
    console.log("Using development settings");
    db_url = "mongodb://" + mongoHostAndPortAndDatabase;
}
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(db_url, function (err, db) {
    var c = db.collection('wellington_suburb_boundaries');
    var w = db.collection('wellington_bus_stops');
    c.find({}).toArray(function (err, docs) {
        console.log("stating");
        var doc;
        for (var i = 0; i < docs.length; i++) {
            doc = docs[i];
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
            var name = doc.properties.suburb;
            w.find(query).toArray(function (err, doc) {
                console.log("Found " + doc.length + " stops");
                var containerDoc = {};
                containerDoc.stops = doc;
                containerDoc.numStops = doc.length;
                var current_name = name;
                console.log("Updating " + current_name);
                c.update({"properties.suburb": current_name}, {$set: {"properties.delme": true}}, {'w': 1}, function (err, r) {
                    if (err !== null) {
                        console.log(err);
                    }
                    console.log(r + " documents updated!");
                });
            });
        }
    });
    setTimeout(function () {
        console.log("Closing");
        db.close();
    }, 5000);
});
//db.wellington_suburb_boundaries.find({}).toArray(function (err, docs) {
//    console.log("stating");
//    var doc;
//    setTimeout(function () {
//        for (var i = 0; i < docs.length; i++) {
//            doc = docs[i];
//            console.log(doc.properties.suburb);
//            name = doc.properties.suburb;
//            query = {
//                "geometry": {
//                    $geoWithin: {
//                        $geometry: {
//                            type: doc.geometry.type,
//                            coordinates: doc.geometry.coordinates
//                        }
//                    }
//                }
//            };
//            db.wellington_bus_stops.find(query).toArray(function (err, doc) {
//                console.log("Found " + doc.length + " stops");
//                var containerDoc = {};
//                containerDoc.stops = doc;
//                containerDoc.numStops = doc.length;
//                db.wellington_suburb_boundaries.update({'properties.suburb': name}, {$set: {busStops: containerDoc}}, function (err, r) {
//                    if (err !== null) {
//                        console.log(err);
//                    }
//                    console.log(r + " documents updated!");
//                });
//            });
//        }
//    }, 1000);
//});