const db = require('./models/db.js');
const mongoose = require('mongoose');

db.connect();

const Rating = require('./models/RatingModel.js');
const Restaurant = require('./models/RestaurantModel.js');

db.findMany(Restaurant, null, "-_id restaurantID", function(result) {
	var insert = []

	for (i=0; i<result.length;i++) {
		insert.push({
			restaurantID: result[i].restaurantID, 
			rating: 5
		})
	}

	db.insertMany(Rating, insert, function(result){
		console.log(result)
	})
})