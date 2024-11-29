const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const fs = require("fs")
const Events = require("./model/events.model")
const cors = require("cors")
const app = express()
const jsonData = fs.readFileSync("events.json", "utf-8")
const eventsData = JSON.parse(jsonData)

app.use(express.json())

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

initializeDatabase()

const seedingData = async() => {
    for(const event of eventsData){
        const newEvent = new Events({
            title: event.title,
            date: event.date,
            typeOfEvent: event.typeOfEvent,
            thumbnail: event.thumbnail,
            tags: event.tags,
            additionalInfo: event.additionalInfo,
            sessionStartTime: event.sessionStartTime,
            sessionEndTime: event.sessionEndTime,
            speakers: event.speakers,
            pricing: event.pricing,
            address: event.address
        })
        newEvent.save()
    }
}
// seedingData()

app.get("/events", async(req,res) => {
    try {
        const events = await Events.find()
        if(events.length != 0){
            res.status(200).json(events)
        } else {
            res.status(404).json({"error": "No event found"})
        }
    } catch (error) {
        res.status(501).json({"eror": "Failed to fetched events" })
    }
})


app.listen('3001', () => {
    console.log("App is listening to port 3001")
})