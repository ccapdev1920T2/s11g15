//edit information
const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const updateInfoController = {

    updateInfo: async function(req, res) {
        try{
        console.log("updateInfo!");
        console.log(req.body);
        var num = req.body.inputnum;
        var adr = req.body.inputadr;

        var _id = req.session.userID;

        var user = {
            contactNo: num,
            location: adr
        }

        db.findOne(User, {_id: _id}, null, function(result) {
            db.updateOne(User, {_id: _id}, user, function(result1) {
                res.send(result1);
            });
        });

        } catch (error) {
        console.log('There was an error: ', error);
        }
    }

}

module.exports = updateInfoController;