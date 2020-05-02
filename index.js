const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const app = express()

const db = require('./models/db.js');
const routes = require('./routes/routes.js');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

mongoose.set('useCreateIndex', true);
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.use(session({
    'secret': 'a',
    'resave': true,
    'saveUninitialized': true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.listen(server_port, server_host, function() {
    console.log('Listening at port ' + server_port);
});



app.use('/', routes);

db.connect();