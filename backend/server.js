const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT ||3000

//controllers
const sendEmail = require('./controllers/sendEmail')

//middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.post('/send-email', sendEmail)

