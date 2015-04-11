var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var db = req.db;
    db.wellington_house_listings.find({}).toArray(function(err, docs) {
        res.json(docs);
    });
});

router.get('/bus_stops', function (req, res) {
    var db = req.db;
    db.wellington_bus_stops.findOne(function(err, doc) {
        res.json(doc);
    });
});

router.get('/housing', function (req, res) {
    var db = req.db;
    var query = {};
    if (req.query.price_min === undefined && req.query.price_max === undefined) {
        res.json({"error": "You need to put at least a min or max"});
    } else if (req.query.price_min !== undefined && req.query.price_max !== undefined){
        query["StartPrice"] = {$gte: parseInt(req.query.price_min), $lte: parseInt(req.query.price_max)};
    } else if (req.query.price_min !== undefined) {
        console.log("Price min");
        query["StartPrice"] = {$gte: parseInt(req.query.price_min)};
    } else if (req.query.price_max !== undefined) {
        query["StartPrice"] = {$lte: parseInt(req.query.price_max)};
    }
    db.wellington_house_listings.find(query).toArray(function(err, doc) {
        res.json(doc);
    });
});

module.exports = router;