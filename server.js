const express = require('express')
const bodyParser = require('body-parser')
const renderFile = require('ejs').renderFile
const app = express()

const PORT = process.env.PORT || 3000

app.set('port', PORT)
app.set('views', '.')
app.engine('html', renderFile)
app.set('view engine', 'html')

app.use(express.static(__dirname + '/'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function (req, res) {
  res.render('index')
})
