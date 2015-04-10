var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

    res.locals = {
        test: 'Hi team!',
        list: ['cat', 'dog']
    }

    res.render('index');
});

app.get('/hello', function(request, response) {
    response.send('Hello World!');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'));
});
