<<<<<<< HEAD

=======
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const apiRouter = require('./routes/routes')

const app = express()

mongoose.connect("mongodb://localhost:27017/ozys", {
    useCreateIndex: true,
    useNewUrlParser: true
})

let corsOptions = {
    exposedHeaders: ["x-auth"]
};


app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api', apiRouter)

app.listen(3000)
>>>>>>> 09b721c70d6e61bd979ee4fe2845c0600933c0eb
