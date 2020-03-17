const express = require('express')
const api_helper = require('./api')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/users', cors(), (req, res) => {
	api_helper.make_API_call('https://reqres.in/api/users')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app