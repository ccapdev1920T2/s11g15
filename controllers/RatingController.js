const db = require('../models/db.js');
const Rating = require('../models/RatingModel.js');
const Restaurant = require('../models/RestaurantModel.js');

const ratingController = {

    postRate: function(req, res) {
        var resID = req.body.restaurantID
        var rate = {
            restaurantID: resID,
            rating: parseInt(req.body.rate)
        }


        db.insertOne(Rating, rate, function(result) {
            var update = {
                restaurantRating: rate.rating
            }

            Rating.aggregate([
                {$match: {restaurantID: resID}},
                {$group: {_id: '$restaurantID', averageRate: {$avg: '$rating'}}}
            ], function(err, res) {
                if (!err) {
                    var avg = res[0].averageRate
                    update.restaurantRating = avg.toFixed(1)
                }

                db.updateOne(Restaurant, {restaurantID: resID}, update, function(result3) {})

            })
        })
    }
}

module.exports = ratingController;