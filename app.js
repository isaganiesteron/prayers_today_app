const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const passport = require('passport')

/**
 * Controllers
 */
const userController = require('./controllers/users')
const prayersController = require('./controllers/prayers')
const feedController = require('./controllers/feed')

const app = express()

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost:27017/apa_app')
mongoose.connection.on('error', (err) => {
	console.error(err)
	console.log('MongoDB connection error. Please make sure MongoDB is running.')
	process.exit()
})


app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send("Answered Prayers App")
})

/**
 * User routers
 */
app.post('/postRegister', userController.postRegister)
app.post('/postLogin', userController.postLogin)
app.post('/editProfile', userController.editProfile)
app.get('/getUserProfile', userController.getUserProfile)

/**
 * Prayers routers
 */
app.post('/createPrayer', prayersController.createPrayer)
app.post('/editPrayer', prayersController.editPrayer)
app.post('/deletePrayer', prayersController.deletePrayer)
app.get('/getPrayer', prayersController.getPrayer)
app.get('/reactToPrayer', prayersController.reactToPrayer)
app.get('/reactToPrayer', prayersController.reactToPrayer)
app.get('/favoritePrayer', prayersController.favoritePrayer)
app.get('/flagPrayer', prayersController.flagPrayer)
app.post('/commentOnPrayer', prayersController.commentOnPrayer)

/**
 * Feed routers
 */
app.get('/getFeed', feedController.getFeed)

app.listen('8080', () => {
	console.log("Answered Prayers App Running on port 8080")
})