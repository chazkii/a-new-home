var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var config = require('../config.json')[app.get('env')];
// Error: Most middleware (like errorHandler) is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.
//app.use(express.errorHandler(config.errorHandlerOptions));

// Database

var mongo = require('mongoskin');
var mongoHostAndPortAndDatabase = config.mongoHost + ":" + config.mongoPort + '/' + config.mongoDatabase;
var db;
var db_url;
if (config.mongoUser !== undefined) {
    console.log("Using production settings");
    db_url = "mongodb://" + config.mongoUser + ":" + config.mongoPassword + "@" + mongoHostAndPortAndDatabase;
    db = mongo.db(db_url, {native_parser:true});
} else {
    console.log("Using development settings");
    db_url = "mongodb://" + mongoHostAndPortAndDatabase;
    db = mongo.db(db_url, {native_parser:true});
}
db.bind('wellington_house_listings');
console.log("Connected to DB " + db_url);

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Store database on request
app.use(function (req, res, next) {
    req.db = db;
    console.log("joined req.db");
    next();
});

var routes = require('./routes/house');

app.use('/', routes);
app.get('/hello', function(request, response) {
    response.send('Hello World!');
});

app.get('/weather', function(req, res) {
    var weatherByDistricts = require('./config/weather-stub.js');

    res.locals = {
        weatherByDistricts: weatherByDistricts
    };

    res.render('weather');
})

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'));
});
