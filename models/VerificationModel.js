var mongoose = require('mongoose');

const VerificationSchema = new mongoose.Schema({
	_userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	token: {
		type: String,
		required: true
	},
	created: {
		type: Date, 
		required: true,
		default: Date.now,
		expires: 86400
	}

});

module.exports = mongoose.model('Verification', VerificationSchema);