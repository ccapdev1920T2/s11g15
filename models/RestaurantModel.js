var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    mainBanner: {
        type: String,
        required: true
    },
    restaurantID: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    restaurantRating: {
        type: Number,
        required: true
    },
    restaurantDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);