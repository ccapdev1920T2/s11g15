var mongoose = require('mongoose');
const db = require('../models/db.js');

var ProductSchema = new mongoose.Schema({
    restaurantID: {
        type: String,
        required: true
    },
    menuID: {
        type: String,
        required: true
    },
    menuImg: {
        type: String,
        required: true
    },
    menuName: {
        type: String,
        required: true
    },
    menuDesc: {
        type: String,
        required: true
    },
    menuPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Product', ProductSchema);