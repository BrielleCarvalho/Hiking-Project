const mongoose = require("mongoose")
const Schema = mongoose.Schema

// EXAMPLE OF TRAIL DATA OBJECT
// ascent: 1281
// conditionDate: "2019-05-12 00:55:02"
// conditionDetails: "Some Mud"
// conditionStatus: "All Clear"
// descent: -1280
// difficulty: "blueBlack"
// high: 6780
// id: 7000000
// imgMedium: "https://cdn-files.apstatic.com/hike/7039883_medium_1555092747.jpg"
// imgSmall: "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg"
// imgSmallMed: "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg"
// imgSqSmall: "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg"
// latitude: 40.0202
// length: 3.2
// location: "Boulder, Colorado"
// longitude: -105.2977
// low: 5521
// name: "Mount Sanitas Loop"
// starVotes: 91
// stars: 4.1
// summary: "Very popular and scenic loop right from the edge of town."
// type: "Featured Hike"
// url: "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop"
// __proto__: Object

// Create the Hike Schema
const HikeSchema = new Schema({

    ascent:  {
        type: Integer
    },
    conditionDate: {
        type: Date
    },
    conditionDetails: {
        type: String
    },
    conditionStatus: {
        type: String
    },
    descent: {
        type: Integer
    },
    difficulty: {
        type: String
    },
    high: {
        type: Integer
    },
    apiId: {
        type: Integer
    },
    imgMedium: {
        type: String
    },
    imgSmall: {

    }
imgSmall: "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg"
imgSmallMed: "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg"
imgSqSmall: "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg"
latitude: 40.0202
length: 3.2
location: "Boulder, Colorado"
longitude: -105.2977
low: 5521
name: "Mount Sanitas Loop"
starVotes: 91
stars: 4.1
summary: "Very popular and scenic loop right from the edge of town."
type: "Featured Hike"
url: "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop"


    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        deafult: Date.now
    }
});

var User = mongoose.model("users", UserSchema);
module.exports = User;

//