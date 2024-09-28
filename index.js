const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB=require('./Config/configDB')

const app = express()
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})