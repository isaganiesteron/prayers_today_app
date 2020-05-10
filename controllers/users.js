const User = require('../models/User')

exports.postRegister = (req, res) => {

}
exports.postLogin = (req, res) => {

}
exports.editProfile = (req, res) => {

}
exports.getUserProfile = (req, res) => {
	console.log('getUserProfile')
	User.findOne({ email: 'email' }, (err, existingUser) => {
		if (err)
			console.log("ERR")
		console.log(existingUser)
		res.send('OK')
	})

}
