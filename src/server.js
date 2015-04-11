var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var config = require('../config.json')[app.get('env')];
// Error: Most middleware (like errorHandler) is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.
//app.use(express.errorHandler(config.errorHandlerOptions));

// Google Maps
var googlemaps = require('googlemaps');

// Database

var mongo = require('mongoskin');
var mongoHostAndPortAndDatabase = config.mongoHost + ":" + config.mongoPort + '/' + config.mongoDatabase;
var db;
var db_url;
if (config.mongoUsername !== undefined) {
    console.log("Using production settings");
    db_url = "mongodb://" + config.mongoUsername + ":" + config.mongoPassword + "@" + mongoHostAndPortAndDatabase;
    db = mongo.db(db_url, {native_parser:true});
} else {
    console.log("Using development settings");
    db_url = "mongodb://" + mongoHostAndPortAndDatabase;
    db = mongo.db(db_url, {native_parser:true});
}
db.bind('wellington_house_listings');
db.bind('wellington_bus_stops');
db.bind('wellington_niwa_statistics');
db.bind('wellington_suburb_boundaries');
console.log("Connected to DB " + db_url);

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/'));

// Store database on request
app.use(function (req, res, next) {
    req.db = db;
    req.googlemaps = googlemaps;
    next();
});

var routes = require('./routes/house');

app.use('/', routes);

app.get('/hello', function(req, res) {
    res.send('hello');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'));
});
