const db = require('./models/db.js');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

db.connect();

const collection = 'users';
const User = require('./models/UserModel.js');

/*
var user = {
    email: "arren@test.com",
    pw: "Arrentest246?",
    fname: "Arren",
    lname: "Antioquia",
    isConfirmed: true
};

bcrypt.hash(user.pw, saltRounds, function(err, hash) {
    user.pw = hash
    db.insertOne(User, user, function(flag) {
        db.findOne(User, {
            email: user.email
        }, null, function(result) {
            console.log(result)
        })
    })
})
var user = {
    email: "regina@test.com",
    pw: "Reginatest246?",
    fname: "Regina",
    lname: "Masilang",
    isConfirmed: true
};

bcrypt.hash(user.pw, saltRounds, function(err, hash) {
    user.pw = hash
    db.insertOne(User, user, function(flag) {
        db.findOne(User, {
            email: user.email
        }, null, function(result) {
            console.log(result)
        })
    })
})

var user = {
    email: "mikayla@test.com",
    pw: "Mikatest246?",
    fname: "Mikayla",
    lname: "Tejada",
    isConfirmed: true
};

bcrypt.hash(user.pw, saltRounds, function(err, hash) {
    user.pw = hash
    db.insertOne(User, user, function(flag) {
        db.findOne(User, {
            email: user.email
        }, null, function(result) {
            console.log(result)
        })
    })
})
*/

var user = {
    email: "abigail@test.com",
    pw: "Abitest246?",
    fname: "Abigail",
    lname: "Wan",
    isConfirmed: true
};

bcrypt.hash(user.pw, saltRounds, function(err, hash) {
    user.pw = hash
    db.insertOne(User, user, function(flag) {
        db.findOne(User, {
            email: user.email
        }, null, function(result) {
            console.log(result)
        })
    })
})
/*
*/