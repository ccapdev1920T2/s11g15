var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    contactNo: {
        type: String,
        required: false
    },
    isConfirmed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);