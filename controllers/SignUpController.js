const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Verification = require('../models/VerificationModel.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

var crypto = require('crypto');
var nodemailer = require('nodemailer');

const signupController = {

    postSignUp: async function(req, res) {
        var fName = req.body.fname;
        var lName = req.body.lname;
        var email = req.body.emailnew;
        var pw = req.body.passnew;

        bcrypt.hash(pw, saltRounds, function(err, hash) {
            var user = {
                email: email,
                fname: fName,
                lname: lName,
                pw: hash
            }
            db.insertOne(User, user, function(flag) {
                db.findOne(User, {email: email}, null, function(result) {

                    //Send out verification email
                    var token = new Verification({
                        _userId: result._id,
                        token: crypto.randomBytes(16).toString('hex')
                    });

                    token.save(function(err) {
                        if (err) {
                            console.log("Error token.");
                            return res.status(500).send({
                                msg: err.message
                            });
                        }

                        var transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: 'foodbites.team@gmail.com',
                                pass: 'foodbites123'
                            }
                        });

                        console.log("Sending to " + result.email);

                        var mail = {
                            from: 'foodbites.team@gmail.com',
                            to: result.email,
                            subject: 'Account Verification',
                            text: 'Good day, ' + result.fname + '!\n\n' + 'Please verify your account by following this link:\nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '\n'
                        }

                        transporter.sendMail(mail, function(err) {
                            if (err) {
                                console.log("Error sending mail.");
                                return res.status(500).send({
                                    msg: err.message
                                });
                            } else {
                                console.log("Mail sent.");
                            }

                            res.status(200).send('A verification email has been sent to ' + result.email + '. Make sure to verify your account within 24 hours.')
                        });



                    });
                    res.send(flag);
                })
            })

        })


    },

    getCheckEmail: async function(req, res) {
        var email = req.query.email;

        db.findOne(User, {email: email}, 'email', function(result) {
            res.send(result);
        });
    },

    postConfirmation: async function(req, res) {

        console.log(req.body.token);

        Verification.findOne({token: req.body.token}, function(err, result) {
            if (!result) {
                console.log("Token does not exist.");
                return res.status(400).send({
                    type: 'not-verified',
                    msg: 'Verification token does not exist or has expired.'
                });

            }


            User.findOne({_id: result._userId, email: req.body.email}, function(err, resultUser) {

                if (!resultUser) {
                    console.log("Cannot find user or email does not match.");
                    return res.render('errorwrongemail');
                }


                if (resultUser.isConfirmed) {
                    console.log("Account already verified.");
                    return res.status(400).send({
                        type: 'already-verified',
                        msg: 'Account has already been verified'
                    });
                }


                resultUser.isConfirmed = true;
                console.log("Account has now been verified.");

                resultUser.save(function(err) {
                    if (err) {
                        console.log("Error saving in post confirmation.");
                        return res.status(500).send({
                            msg: err.message
                        });
                    }

                    res.render('verificationsuccess', {

                    });
                });
            });


        });
    }

}

module.exports = signupController;