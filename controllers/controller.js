const db = require('../models/db.js');
const Restaurant = require('../models/RestaurantModel.js');
const Product = require('../models/ProductModel.js');
const User = require('../models/UserModel.js');
const Verification = require('../models/VerificationModel.js');
const Order = require('../models/OrderModel.js');

const controller = {

    getRestaurant: async function(req, res) {
        var rName = req.params.restaurant;
        var query = {
            restaurantID: rName
        };

        db.findOne(Restaurant, query, null, function(result) {
            if (!result) {
                res.render("error", {
                    details: "Cannot Find Restaurant"
                })
            } else {

                db.findMany(Product, {restaurantID: rName}, null, function(result2) {
                    result.menu = db.formatPrice(result2, "menuPrice");
                    if (req.session.userID) {
                        result.userID = req.session.userID;
                        result.cart = null

                        if (typeof req.session.cart != "undefined" && req.session.cart.length != 0)
                            if (req.session.cart[0].restaurantID == query.restaurantID)
                                result.cart = req.session.cart;
                    } else {
                        result.userID = null
                    }
                    res.render("restaurant", result);
                })
            }
        });
    },

    getHomePage: async function(req, res) {

        db.find(Restaurant, null, null, function(result) {
            var details = {
                restaurant: result,
                carouselitem: [{
                        img: "main-banner.png",
                        class: "active"
                    },
                    {
                        img: "main-banner2.png",
                        class: ""
                    },
                    {
                        img: "main-banner3.png",
                        class: ""
                    }
                ],
            }

            if (req.session.userID) {
                details.userID = req.session.userID
            } else {
                details.userID = null
            }

            res.render('home', details)
        });

    },

    getOrderHistory: async function(req, res) {
        var userID = req.session.userID;
        var query = {
            _id: userID
        };

        if (userID) {
            db.findMany(Order, {userID: userID}, null, function(result) {
                result = db.formatHistory(result)
                result.userID = userID;

                res.render("orderhistory", {
                    order: result,
                    userID: userID
                });
            });
        } else
            res.render("error", {
                details: "Please Log In or Register an Account"
            })
    },

    getSettings: async function(req, res) {
        var userID = req.session.userID;
        var query = {
            _id: userID
        };
        if (userID) {
            db.findOne(User, query, null, function(result) {
                result.userID = userID;
                res.render("settings", result);
            });
        } else
            res.render("error", {
                details: "Please Log In or Register an Account"
            })
    },

    getCheckout: async function(req, res) {
        var items = req.session.cart;
        var userID = req.session.userID;

        if (!userID) {
            res.render("error", {
                details: "Please Log In or Register an Account"
            })
        } else if (typeof items == "undefined" || items.length == 0) {
            res.render("error", {
                details: "Cart is Empty"
            })
        } else {
            var total = db.sum(items, 'total')

            db.findOne(User, {_id: userID}, null, function(result) {
                result.items = items;
                result.allTotal = total;
                result.userID = req.session.userID

                res.render("checkout", result)
            });
        }
    },

    getVerification: async function(req, res) {

        var token = req.params.token;

        db.findOne(Verification, {token: token}, null, function(result) {
            res.render("verifyemail", {
                token: result.token
            });
        });
    }
}

module.exports = controller;