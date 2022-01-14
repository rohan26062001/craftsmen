const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://craftsmangdsc:e7tKC7Jm3tGCF55i@craftsman.rd8ve.mongodb.net/Craftsman"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;


