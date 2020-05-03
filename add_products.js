const db = require('./models/db.js');
const mongoose = require('mongoose');


db.connect();

const collection = 'products';
const Product = require('./models/ProductModel.js');

var product = {
    restaurantID: 'mcdonalds',
    menuID: '12011',
    menuImg: 'mcdo_burger.jpg',
    menuName: 'Cheese Burger',
    menuDesc: 'A hamburger with lettuce, tomato, pickles and a slice of cheese.',
    menuPrice: '90.00'
};

db.insertOne(Product, product, function(flag) {
    if (flag)
        console.log("T");
    else
        console.log("F");
});


var product = {
    restaurantID: 'mcdonalds',
    menuID: '12012',
    menuImg: 'mcdo_fries.jpg',
    menuName: 'Fries',
    menuDesc: 'Thin pieces of fried potato',
    menuPrice: '50.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'mcdonalds',
    menuID: '12013',
    menuImg: 'mcdo_nuggets.jpg',
    menuName: 'Chicken Nuggets',
    menuDesc: 'Deep-fried breaded chicken meat.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'angrydobo',
    menuID: '12021',
    menuImg: 'ad_classic.jpg',
    menuName: 'Angrydobo Classic',
    menuDesc: 'Pork belly.',
    menuPrice: '270.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'angrydobo',
    menuID: '12022',
    menuImg: 'ad_sisig.jpg',
    menuName: 'Angrydobo Sisig',
    menuDesc: 'Pork sisig.',
    menuPrice: '250.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'angrydobo',
    menuID: '12023',
    menuImg: 'ad_ribs.jpg',
    menuName: 'Angrydobo Short Ribs',
    menuDesc: 'US beef short ribs braised for 5 hours with Angrydobo sauce.',
    menuPrice: '325.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'kfc',
    menuID: '12031',
    menuImg: 'kfc_burger.jpg',
    menuName: 'Classic Chicken Burger',
    menuDesc: 'Hot sandwich made of a patty of chicken breast.',
    menuPrice: '50.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'kfc',
    menuID: '12032',
    menuImg: 'kfc_chicken.jpg',
    menuName: '1pc. Original Recipe Chicken',
    menuDesc: 'Chicken made with 11 herbs and spices.',
    menuPrice: '99.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'kfc',
    menuID: '12033',
    menuImg: 'kfc_wedges.jpg',
    menuName: 'Potato Wedges',
    menuDesc: 'Lightly battered potato wedges in a thin KFC chicken flavored seasoning.',
    menuPrice: '45.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'dominos',
    menuID: '12041',
    menuImg: 'pepperoni.jpg',
    menuName: 'Pepperoni Feast',
    menuDesc: 'A classic favorite with pizza sauce, pepperoni, and mozzarella cheese.',
    menuPrice: '200.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'dominos',
    menuID: '12042',
    menuImg: 'cheese.jpg',
    menuName: '1pc. Original Recipe Chicken',
    menuDesc: "A light pizza that's bursting with flavor.",
    menuPrice: '190.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'dominos',
    menuID: '12043',
    menuImg: 'tomato.jpg',
    menuName: 'Kalamata Tomato',
    menuDesc: 'Newest bestseller topped with tomatoes, black olives, basil flakes, mozzarella, and pizza sauce.',
    menuPrice: '250.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'ramennaijiro',
    menuID: '12051',
    menuImg: 'tonkotsu.jpg',
    menuName: 'Tonkotsu Ramen',
    menuDesc: 'Ramen with grilled tonkotsu, tamago, seaweed, and bamboo shoots.',
    menuPrice: '150.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'ramennaijiro',
    menuID: '12052',
    menuImg: 'redramen.jpg',
    menuName: 'Naijiro Red Ramen',
    menuDesc: "Ramen ingredients sprinkled with spice powder with a big meatball as its centerpiece.",
    menuPrice: '220.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'ramennaijiro',
    menuID: '12053',
    menuImg: 'tantanmen.jpg',
    menuName: 'Tantanmen Ramen',
    menuDesc: 'Ramen that has a glossy soup topped with bean sprouts, seaweed, and ground meat.',
    menuPrice: '165.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'zarksburgers',
    menuID: '12061',
    menuImg: 'floyd_sandwich.jpg',
    menuName: 'Floyd Chicken Sandwich',
    menuDesc: 'A flavorful chicken sandwich.',
    menuPrice: '159.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'zarksburgers',
    menuID: '12062',
    menuImg: 'thunder_cheese.jpg',
    menuName: 'Thunder Mac N’ Cheese',
    menuDesc: "Your favorite mac n' cheese on a burger.",
    menuPrice: '249.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'zarksburgers',
    menuID: '12063',
    menuImg: 'zark_wings.jpg',
    menuName: 'Buffalo Wings',
    menuDesc: 'Hot and spicy wings!',
    menuPrice: '259.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'hungerbuster',
    menuID: '12071',
    menuImg: 'hunger_dying.jpg',
    menuName: 'Dying Burger',
    menuDesc: 'Perfect for students.',
    menuPrice: '159.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'hungerbuster',
    menuID: '12072',
    menuImg: 'hunger_starving.jpg',
    menuName: 'Starving Burger',
    menuDesc: "A great burger to fill up your day.",
    menuPrice: '149.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'hungerbuster',
    menuID: '12073',
    menuImg: 'hunger_rising.jpg',
    menuName: 'Rising Burger',
    menuDesc: 'Shine bright like a diamond.',
    menuPrice: '159.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'ichiro',
    menuID: '12081',
    menuImg: 'ichiro_tonkatsu.jpg',
    menuName: 'Pork Tonkatsu',
    menuDesc: 'A classic dish.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'ichiro',
    menuID: '12082',
    menuImg: 'ichiro_curry.jpg',
    menuName: 'Curry Katsu',
    menuDesc: "Curry Katsu.",
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'ichiro',
    menuID: '12083',
    menuImg: 'ichiro_cheese.jpg',
    menuName: 'Cheese Roll Katsu',
    menuDesc: 'Cheese rolls.',
    menuPrice: '140.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'holygrill',
    menuID: '12091',
    menuImg: 'holy_sisig.jpg',
    menuName: 'Sizzling Sisig',
    menuDesc: 'A classic Filipino dish.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'holygrill',
    menuID: '12092',
    menuImg: 'holy_ribs.jpg',
    menuName: 'Cumin Ribs',
    menuDesc: "Tender cumin ribs.",
    menuPrice: '135.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'holygrill',
    menuID: '12093',
    menuImg: 'holy_burrito.jpg',
    menuName: 'Sisig Burrito',
    menuDesc: 'A classic with a spin.',
    menuPrice: '145.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'crazykatsu',
    menuID: '120101',
    menuImg: 'crazy_pudding.jpg',
    menuName: 'Pudding',
    menuDesc: 'Sweet and fresh pudding.',
    menuPrice: '75.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'crazykatsu',
    menuID: '120102',
    menuImg: 'crazy_chicken.jpg',
    menuName: 'Chicken Katsu',
    menuDesc: "Bestseller chicken katsu.",
    menuPrice: '135.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'crazykatsu',
    menuID: '120103',
    menuImg: 'crazy_tonkatsu.jpg',
    menuName: 'Tonkatsu',
    menuDesc: 'A classic Japanese dish.',
    menuPrice: '105.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'waiyingdimsum',
    menuID: '120111',
    menuImg: 'wai_siomai.jpg',
    menuName: 'Siomai',
    menuDesc: '4 pcs. Siomai.',
    menuPrice: '75.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'waiyingdimsum',
    menuID: '120112',
    menuImg: 'wai_siopao.jpg',
    menuName: 'Pork Siopao',
    menuDesc: "Warm and steamy siopao.",
    menuPrice: '100.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'waiyingdimsum',
    menuID: '120113',
    menuImg: 'wai_wonton.jpg',
    menuName: 'Wonton',
    menuDesc: '4 pcs. Wonton.',
    menuPrice: '75.00'
};

db.insertOne(Product, product, function() {});




var product = {
    restaurantID: 'bagnet',
    menuID: '120121',
    menuImg: 'bagnet_original.jpg',
    menuName: 'Original Bagnet',
    menuDesc: 'The classic bagnet.',
    menuPrice: '105.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'bagnet',
    menuID: '120122',
    menuImg: 'bagnet_kare.jpg',
    menuName: 'Kare-Kare Bagnet',
    menuDesc: "Bagnet with a Kare-Kare twist.",
    menuPrice: '140.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'bagnet',
    menuID: '120123',
    menuImg: 'bagnet_sinigang.jpg',
    menuName: 'Sinigang Bagnet',
    menuDesc: 'Bagnet sinigang.',
    menuPrice: '130.00'
};

db.insertOne(Product, product, function() {});



var product = {
    restaurantID: 'bistropaleta',
    menuID: '120131',
    menuImg: 'paleta_nacho.jpg',
    menuName: 'Nacho Libre',
    menuDesc: 'A nice serving of nachos.',
    menuPrice: '150.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'bistropaleta',
    menuID: '120132',
    menuImg: 'paleta_mango.jpg',
    menuName: 'Mango Crepe',
    menuDesc: "Delicious mango crepe.",
    menuPrice: '80.00'
};

db.insertOne(Product, product, function() {});

var product = {
    restaurantID: 'bistropaleta',
    menuID: '120133',
    menuImg: 'paleta_chicken.jpg',
    menuName: 'Classic Chicken',
    menuDesc: 'Fried chicken with lemon sauce.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});



//FLAMING WINGS
var product = {
    restaurantID: 'flamingwings',
    menuID: '120141',
    menuImg: 'fw_wings.jpg',
    menuName: 'Original 3 pcs Wings with Ranch Dip',
    menuDesc: 'Chicken wings with mild spice.',
    menuPrice: '195.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'flamingwings',
    menuID: '120142',
    menuImg: 'fw_spag.jpg',
    menuName: 'Spaghetti Bolognese',
    menuDesc: "Pasta served with a sauce made from tomatoes, minced beef, garlic, wine and herbs.",
    menuPrice: '175.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'flamingwings',
    menuID: '120143',
    menuImg: 'fw_steak.jpg',
    menuName: 'Super Stuffed Pork chops',
    menuDesc: 'Pork loin served with java rice.',
    menuPrice: '250.00'
};

db.insertOne(Product, product, function() {});




//CHOMP
var product = {
    restaurantID: 'chompchomp',
    menuID: '120151',
    menuImg: 'chomp_rolls.jpg',
    menuName: 'Beef Rolls',
    menuDesc: 'Beef rolls on a stick.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'chompchomp',
    menuID: '120152',
    menuImg: 'chomp_laksa.jpg',
    menuName: 'Laksa Noodles',
    menuDesc: "Hot and steamy laksa noodles.",
    menuPrice: '135.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'chompchomp',
    menuID: '120153',
    menuImg: 'chomp_bbq.jpg',
    menuName: 'Pork Barbeque',
    menuDesc: '2 pcs. barbeque sticks.',
    menuPrice: '120.00'
};

db.insertOne(Product, product, function() {});




//TORI BOX
var product = {
    restaurantID: 'toribox',
    menuID: '120161',
    menuImg: 'tb_pop.jpg',
    menuName: 'Kara-age Pop',
    menuDesc: 'Deep-fried chicken pops seasoned with soy sauce, garlic, and ginger.',
    menuPrice: '65.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'toribox',
    menuID: '120162',
    menuImg: 'tb_katsu.jpg',
    menuName: 'Pork Katsu',
    menuDesc: "Pork cutlet served with a sweet and savory sauce.",
    menuPrice: '135.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'toribox',
    menuID: '120163',
    menuImg: 'tb_chips.jpg',
    menuName: 'Tori Chips',
    menuDesc: 'Thin slices of potato chips.',
    menuPrice: '60.00'
};

db.insertOne(Product, product, function() {});




//CBTL
var product = {
    restaurantID: 'cbtl',
    menuID: '120171',
    menuImg: 'cbtl_spag.jpg',
    menuName: 'Tomato and Herb Linguine',
    menuDesc: 'Hearty tomato and cream-based pasta selections made with only the freshest ingredients. Served with a slice of panini bread.',
    menuPrice: '195.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'cbtl',
    menuID: '120172',
    menuImg: 'cbtl_cake.jpg',
    menuName: 'Chocolate Fudge Cake',
    menuDesc: "Moist cake made with chocolate and cocoa powder.",
    menuPrice: '190.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'cbtl',
    menuID: '120173',
    menuImg: 'cbtl_coffee.jpg',
    menuName: 'Medium Cafe Latte',
    menuDesc: 'Coffee drink brewed from only the top 1% of Arabica beans in the world.',
    menuPrice: '150.00'
};

db.insertOne(Product, product, function() {});




//BONCHON
var product = {
    restaurantID: 'bonchon',
    menuID: '120181',
    menuImg: 'bonchon_chicken.jpg',
    menuName: '2pc Chicken Boxed Meal',
    menuDesc: 'Soy garlic chicken with rice and iced tea.',
    menuPrice: '172.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'bonchon',
    menuID: '120182',
    menuImg: 'bonchon_chap.jpg',
    menuName: 'Regular Chapchae',
    menuDesc: "Stir-fried starch noodles with beef and vegetables.",
    menuPrice: '105.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'bonchon',
    menuID: '120183',
    menuImg: 'bonchon_bibimnoodles.jpg',
    menuName: 'Original Chicken Bibimnoodles',
    menuDesc: 'Egg noodles with slivers of earthy seaweed, crunchy carrots, chopped egg strips, and a sizable dollop of original sauce.',
    menuPrice: '135.00'
};

db.insertOne(Product, product, function() {});




//ARMY NAVY
var product = {
    restaurantID: 'armynavy',
    menuID: '120191',
    menuImg: 'an_burger.jpg',
    menuName: 'Classic Burger',
    menuDesc: 'Single quarter-pound beef patty.',
    menuPrice: '200.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'armynavy',
    menuID: '120192',
    menuImg: 'an_burrito.jpg',
    menuName: 'Steak Burrito',
    menuDesc: "Flour tortilla filled with savory filling, steak, rice, cooked beans, vegetables, condiments, and cheese.",
    menuPrice: '220.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'armynavy',
    menuID: '120193',
    menuImg: 'an_chipotle.jpg',
    menuName: 'Chipotle Crispy Chicken Sandwich',
    menuDesc: 'Fried chicken fillet topped with chipotle pepper sauce with crispy onion rings, fresh lettuce and mayo on toasted sesame seed Kaiser bun.',
    menuPrice: '220.00'
};

db.insertOne(Product, product, function() {});




//BURGER KING
var product = {
    restaurantID: 'burgerking',
    menuID: '120201',
    menuImg: 'bk_whopper.jpg',
    menuName: 'Whopper',
    menuDesc: 'Burger with a flame-grilled beef patty, sesame seed bun, mayonnaise, lettuce, tomato, pickles, ketchup, and sliced onion.',
    menuPrice: '155.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'burgerking',
    menuID: '120202',
    menuImg: 'bk_bacon.jpg',
    menuName: 'Bacon King',
    menuDesc: "Burger with two flame-grilled beef patty, bacon, sesame seed bun, mayonnaise, and cheese.",
    menuPrice: '190.00'
};

db.insertOne(Product, product, function() {});


var product = {
    restaurantID: 'burgerking',
    menuID: '120203',
    menuImg: 'bk_onion.jpg',
    menuName: 'Onion Rings',
    menuDesc: 'Onion slices covered with batter and breadcrumbs.',
    menuPrice: '40.00'
};

db.insertOne(Product, product, function() {});