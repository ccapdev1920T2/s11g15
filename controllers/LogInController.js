const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const bcrypt = require('bcrypt');

const loginController = {

    postLogIn: async function(req, res) {
        try{
        var email = req.body.email;
        var pw = req.body.pass;

        db.findOne(User, {email: email, pw: pw}, null, function(result) {
            res.send(result);
        });

        } catch (error) {
        console.log('There was an error: ', error);
        }

    },

    getLogIn: async function(req, res) {
        try{
        var email = req.query.email;
        var pw = req.query.pw;

        db.findOne(User, {email: email}, "pw isConfirmed", function(result) {
            if (result) {
                bcrypt.compare(pw, result.pw, function(err, equal) {
                    if (equal) {
                        if (result.isConfirmed) {
                            req.session.userID = result._id;
                            res.send(true)
                        } else
                            res.send("Verify")
                    } else {
                        res.send(false)
                    }
                })
            } else res.send(false)
        });

        } catch (error) {
        console.log('There was an error: ', error);
        }
    }
}

module.exports = loginController;