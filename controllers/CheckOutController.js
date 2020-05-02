const db = require('../models/db.js');
const Order = require('../models/OrderModel.js');
const Restaurant = require('../models/RestaurantModel.js');
const User = require('../models/UserModel.js');

const checkoutController = {

    postOrder: async function(req, res) {
        try{
        var order = {
            userID: req.session.userID,
            orderDate: req.body.orderDate,
            userPayment: parseFloat(req.body.userPayment).toFixed(2),
            foodItems: req.session.cart,
            totalPrice: db.sum(req.session.cart, 'total')
        }

        var user = {
            location: req.body.location,
            contactNo: req.body.contactNo
        }

        db.updateOne(User, {_id: req.session.userID}, user, function(result) {})


        db.findOne(Restaurant, {restaurantID: order.foodItems[0].restaurantID}, "-_id restaurantName", function(result) {
            order.restaurantName = result.restaurantName

            db.insertOne(Order, order, function(result) {
                if (result) {
                    req.session.cart = []
                    req.session.save()
                }
            })
        })

        } catch (error) {
        console.log('There was an error: ', error);
        }

    }
}

module.exports = checkoutController;