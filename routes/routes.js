const express = require('express');

const controller = require('../controllers/controller.js')
const signupController = require('../controllers/SignUpController.js');
const loginController = require('../controllers/LogInController.js');
const logoutController = require('../controllers/LogOutController.js');
const ratingController = require('../controllers/RatingController.js');
const updateInfoController = require('../controllers/UpdateInfoController.js');
const checkoutController = require('../controllers/CheckOutController.js');
const cartController = require('../controllers/CartController.js');

const db = require('../models/db.js');
const Product = require('../models/ProductModel.js');

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.get('/', controller.getHomePage);
app.get('/restaurants/:restaurant', controller.getRestaurant);
app.get('/history', controller.getOrderHistory);
app.get('/settings', controller.getSettings);
app.get('/checkout', controller.getCheckout);

app.post('/signup', signupController.postSignUp);
app.get('/checkEmail', signupController.getCheckEmail);

//Verification Email
app.post('/confirmation', signupController.postConfirmation);
app.get('/confirmation/:token', controller.getVerification);

app.post('/login', loginController.postLogIn);
app.get('/checkLogIn', loginController.getLogIn);

app.post('/submitOrder', checkoutController.postOrder);

app.get('/logout', logoutController.getLogOut);

app.post('/rate', ratingController.postRate);

app.post('/edit', updateInfoController.updateInfo);

app.get('*', function(req, res, next) {
    res.locals.cart = req.session.cart;
    next();
});

app.post('/add-to-cart/:restaurantID/:menuID', cartController.addToCart)
app.delete('/delete-from-cart', cartController.deleteFromCart)

app.get("*", function(req, res) {
    res.render("error", {
        details: "Page Does Not Exist"
    })
})

module.exports = app;