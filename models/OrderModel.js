var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },

    orderDate: {
        type: Date,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    userPayment: {
        type: Number,
        required: true
    },

    restaurantName: {
        type: String,
        required: true
    },

    foodItems: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);