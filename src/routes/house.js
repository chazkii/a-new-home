var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var db = req.db;
    db.wellington_house_listings.find({}).toArray(function(err, docs) {
        res.json(docs);
    });
});

module.exports = router;