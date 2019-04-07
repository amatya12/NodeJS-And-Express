const express = require('express')
const morgan = require('morgan')


const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require('./Routes/index.route'))




app.listen('1337');
