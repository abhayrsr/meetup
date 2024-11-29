const mongoose = require('mongoose')

const EventsSchema = new mongoose.Schema({
    title: String,
    date: Date,
    typeOfEvent: {
        type: String,
        enum: ["Online", "Offline", "Both"]
    },
    thumbnail: String,
    tags: {
        type: [String],
        enum: ["marketing", "technology", "film-making", "fitness", "design", "relation", "digital", "in-person"]
    },
    additionalInfo:{
        dressCode: {type: String},
        ageRestriction: {type: String}
    },
    sessionStartTime: String,
    sessionEndTime: String,
    speakers: [String],
    pricing: {
        type: Number,
        default: 0
    },
    address: String,
})

const Events = mongoose.model("Events", EventsSchema)

module.exports = Events