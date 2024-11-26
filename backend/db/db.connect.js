const mongoose = require('mongoose')
require("dotenv/config")

const uri = process.env.MONGODB

const initializeDatabase = async () => {
    try {
        await mongoose.connect(uri).then(() => {
            console.log("Database connected to MongoDB")
        }).catch((error) => {
            console.log("Error connecting to database", error)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { initializeDatabase }
