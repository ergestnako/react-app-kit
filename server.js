const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist'))

app.listen(port, function() {
  console.log('App running on http://localhost:' + port)
})
