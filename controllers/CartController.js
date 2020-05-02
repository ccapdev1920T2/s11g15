const db = require('../models/db.js');
const Product = require('../models/ProductModel.js');

const cartController = {

    addToCart: function(req, res) {
        var menuID = req.params.menuID;
        var restaurantID = req.params.restaurantID;

        Product.findOne({menuID: menuID}, function(err, p) {
            if (err)
                console.log(err);

            if (typeof req.session.cart == "undefined" || req.session.cart.length == 0) {
                req.session.cart = [];
                req.session.cart.push({
                    restaurantID: p.restaurantID,
                    menuID: p.menuID,
                    menuImg: p.menuImg,
                    menuName: p.menuName,
                    menuDesc: p.menuDesc,
                    menuPrice: parseFloat(p.menuPrice).toFixed(2),
                    quantity: parseFloat(req.body.quantity),
                    total: (parseFloat(p.menuPrice) * parseFloat(req.body.quantity)).toFixed(2)
                });
            }

            else if (req.session.cart[0].restaurantID != restaurantID) {
                req.session.cart = [];
                req.session.cart.push({
                    restaurantID: p.restaurantID,
                    menuID: p.menuID,
                    menuImg: p.menuImg,
                    menuName: p.menuName,
                    menuDesc: p.menuDesc,
                    menuPrice: parseFloat(p.menuPrice).toFixed(2),
                    quantity: parseFloat(req.body.quantity),
                    total: (parseFloat(p.menuPrice) * parseFloat(req.body.quantity)).toFixed(2)
                });
            }

            else {
                var cart = req.session.cart;
                var newItem = true;

                //Add if item is already cart
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].menuID == menuID) {
                        cart[i].quantity = parseFloat(cart[i].quantity) + parseFloat(req.body.quantity);
                        cart[i].total = (parseFloat(cart[i].total) + (parseFloat(cart[i].menuPrice) * parseFloat(req.body.quantity))).toFixed(2);
                        newItem = false;
                        break;
                    }
                }

                //Add if new unique item in cart
                if (newItem && restaurantID == cart[0].restaurantID) {
                    cart.push({
                        restaurantID: p.restaurantID,
                        menuID: p.menuID,
                        menuImg: p.menuImg,
                        menuName: p.menuName,
                        menuDesc: p.menuDesc,
                        menuPrice: parseFloat(p.menuPrice).toFixed(2),
                        quantity: parseFloat(req.body.quantity),
                        total: (parseFloat(p.menuPrice) * parseFloat(req.body.quantity)).toFixed(2)
                    });
                }

            }

            req.session.save();
            console.log(req.session.cart);
            res.redirect(req.get('referer'));
        });



    },

    deleteFromCart: function(req, res) {
        var cart = req.session.cart;

        var i = 0;
        while (i < cart.length) {
            if (cart[i].menuID == req.body.menuID) {
                cart.splice(i, 1);
            } else {
                i++;
            }
        }

        console.log(req.session.cart);

        res.redirect(303, req.get('referer'));
    }
}

module.exports = cartController;