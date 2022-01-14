const connectToMongo = require('./db');
const express = require('express')
const fileupload = require('express-fileupload')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json()) //Middleware to use req.body;
app.use(fileupload()) //file upload use

app.use('/api/', require('./routes/auth'))
app.use('/api/products', require('./routes/product'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/payment', require('./routes/payment'))


app.listen(port, () => {
  console.log(`Craftsman backend listening at http://localhost:${port}`)
})
