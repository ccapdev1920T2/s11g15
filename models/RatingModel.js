var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
    restaurantID: {
        type: String,
        required: true,
        ref: "Restaurant"
    },

    rating: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Rating", RatingSchema);