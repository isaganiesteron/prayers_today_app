const bcrypt = require('bcrypt')
const crypto = require('crypto')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	password: String,
	passwordResetToken: String,
	passwordResetExpires: Date,
	emailVerificationToken: String,
	emailVerified: Boolean,

	facebook: String,
	google: String,
	instagram: String,
	tokens: Array,

	profile: {
		name: String,
		gender: String,
		location: String,
		bio: String,
		picture: String
	},
	favorites: Array,
	comments: Array,
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User
