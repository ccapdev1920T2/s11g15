const db = require('./models/db.js');
const mongoose = require('mongoose');

db.connect();

const collection = 'restaurants';
const Restaurant = require('./models/RestaurantModel.js');

//MCDONALDS
var restaurant = {
    mainBanner: 'mcdo_banner.jpg',
    restaurantID: 'mcdonalds',
    restaurantName: "McDonald's",
    restaurantRating: 4,
    restaurantDescription: 'One of the largest chains of fast food for hamburgers.'
};

db.insertOne(Restaurant, restaurant, function() {});

//ANGRYDOBO
var restaurant = {
    mainBanner: 'adobo_banner.jpg',
    restaurantID: 'angrydobo',
    restaurantName: "Angrydobo",
    restaurantRating: 5,
    restaurantDescription: 'A restaurant that mainly serves the famous Filipino dish, Adobo.'
};

db.insertOne(Restaurant, restaurant, function() {});

//KFC
var restaurant = {
    mainBanner: 'kfc_banner.jpg',
    restaurantID: 'kfc',
    restaurantName: "Kentucky Fried Chicken",
    restaurantRating: 4,
    restaurantDescription: 'A fast food chain that specializes in fried chicken.'
};

db.insertOne(Restaurant, restaurant, function() {});

//DOMINOS
var restaurant = {
    mainBanner: 'dominos-banner.webp',
    restaurantID: 'dominos',
    restaurantName: "Domino's Pizza",
    restaurantRating: 4,
    restaurantDescription: 'Serves hand-tossed, thin crust pizzas with a variety of toppings.'
};

db.insertOne(Restaurant, restaurant, function() {});

//RAMEN NAIJIRO
var restaurant = {
    mainBanner: 'ramen-banner.webp',
    restaurantID: 'ramennaijiro',
    restaurantName: "Ramen Naijiro",
    restaurantRating: 4,
    restaurantDescription: 'Offers the favorite classic ramen bowls and some with a twist!'
};

db.insertOne(Restaurant, restaurant, function() {});

//Zarks

var restaurant = {
    mainBanner: 'zark_banner.jpg',
    restaurantID: 'zarksburgers',
    restaurantName: "Zark's Burgers",
    restaurantRating: 4,
    restaurantDescription: 'Serves FRESH.HUGE.GREAT. burgers.'
};

db.insertOne(Restaurant, restaurant, function() {});

// HUNGER BUSTER
var restaurant = {
    mainBanner: 'hunger_banner.jpg',
    restaurantID: 'hungerbuster',
    restaurantName: "Hunger Buster",
    restaurantRating: 4,
    restaurantDescription: 'Great tasting burgers.'
};

db.insertOne(Restaurant, restaurant, function() {});


//ICHIRO
var restaurant = {
    mainBanner: 'ichiro_banner.jpg',
    restaurantID: 'ichiro',
    restaurantName: "Ichiro",
    restaurantRating: 3,
    restaurantDescription: 'Quick Japanese food.'
};

db.insertOne(Restaurant, restaurant, function() {});


//HOLY GRILL
var restaurant = {
    mainBanner: 'holy_banner.jpg',
    restaurantID: 'holygrill',
    restaurantName: "Holy Grill",
    restaurantRating: 3,
    restaurantDescription: 'Grilled Filipino cuisine.'
};

db.insertOne(Restaurant, restaurant, function() {});



//CRAZY KATSU
var restaurant = {
    mainBanner: 'crazy_banner.jpg',
    restaurantID: 'crazykatsu',
    restaurantName: "Crazy Katsu",
    restaurantRating: 4,
    restaurantDescription: 'Crazy good Japanese food.'
};

db.insertOne(Restaurant, restaurant, function() {});

//Wai Ying
var restaurant = {
    mainBanner: 'wai_banner.jpg',
    restaurantID: 'waiyingdimsum',
    restaurantName: "Wai Ying Dimsum",
    restaurantRating: 4,
    restaurantDescription: 'Chinese restaurant known for its dimsums.'
};

db.insertOne(Restaurant, restaurant, function() {});


//Bagnet
var restaurant = {
    mainBanner: 'bagnet_banner.jpg',
    restaurantID: 'bagnet',
    restaurantName: "8065 Bagnet",
    restaurantRating: 4,
    restaurantDescription: 'Bagnet dishes, which can either be served crispy or in other ways.'
};

db.insertOne(Restaurant, restaurant, function() {});



//Bistro Paleta
var restaurant = {
    mainBanner: 'paleta_banner.jpg',
    restaurantID: 'bistropaleta',
    restaurantName: "Bistro Paleta",
    restaurantRating: 3,
    restaurantDescription: 'Serves delicious and fine cuisine.'
};

db.insertOne(Restaurant, restaurant, function() {});

//FLAMING WINGS
var restaurant = {
    mainBanner: 'fw_banner.jpg',
    restaurantID: 'flamingwings',
    restaurantName: "Flaming Wings",
    restaurantRating: 4,
    restaurantDescription: 'Serving up awesome wings and tenders since 2005.'
};

db.insertOne(Restaurant, restaurant, function() {});

//KANTO FREESTYLE
var restaurant = {
    mainBanner: 'kantof_banner.jpg',
    restaurantID: 'kantofreestyle',
    restaurantName: "Kanto Freestyle",
    restaurantRating: 5,
    restaurantDescription: 'All-day breakfast restaurant featuring Filipino and Western fare.'
};

db.insertOne(Restaurant, restaurant, function() {});

//TORI BOX
var restaurant = {
    mainBanner: 'tb_banner.jpg',
    restaurantID: 'toribox',
    restaurantName: "Tori Box",
    restaurantRating: 4,
    restaurantDescription: 'Serving affordable Kara-age meals.'
};

db.insertOne(Restaurant, restaurant, function() {});

//CBTL
var restaurant = {
    mainBanner: 'cbtl_banner.png',
    restaurantID: 'cbtl',
    restaurantName: "The Coffee Bean & Tea Leaf",
    restaurantRating: 5,
    restaurantDescription: 'Offers a wide selection of gourmet dishes that goes well with coffee or tea.'
};

db.insertOne(Restaurant, restaurant, function() {});

//BONCHON
var restaurant = {
    mainBanner: 'bonchon_banner.jpg',
    restaurantID: 'bonchon',
    restaurantName: "BonChon Chicken",
    restaurantRating: 4,
    restaurantDescription: 'South Korean-based international fried chicken restaurant franchise.'
};

db.insertOne(Restaurant, restaurant, function() {});

//ARMY NAVY
var restaurant = {
    mainBanner: 'an_banner.jpg',
    restaurantID: 'armynavy',
    restaurantName: "Army Navy",
    restaurantRating: 4,
    restaurantDescription: 'A food service company pioneered in the Philippines which specializes in a unique burger + burrito concept.'
};

db.insertOne(Restaurant, restaurant, function() {});

//BURGER KING
var restaurant = {
    mainBanner: 'bk_banner.jpg',
    restaurantID: 'burgerking',
    restaurantName: "Burger King",
    restaurantRating: 4,
    restaurantDescription: 'Restaurant company specializing in flame-broiled fast-food hamburgers'
};

db.insertOne(Restaurant, restaurant, function() {});