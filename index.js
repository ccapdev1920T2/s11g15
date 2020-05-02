const express = require('express');
const hbs = require('hbs');
const session = require('express-session');

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

/*app.listen(port, function() {
    console.log('Listening at port ' + port);
});*/

/*if (process.env.NODE_ENV === 'production') {
    app.use(express.static("build"));


    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });

}*/


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);



app.use('/', routes);

db.connect();