const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const connectDB = require('./Config/configDB')
const userRoute = require('./User/userRoute')

const app = express()
app.use(express.json())

connectDB()

app.use('/api/users', userRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})