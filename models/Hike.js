const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Comment Schema
const HikeSchema = new Schema({

    ascent:  {
        type: Number
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
        type: Number
    },
    difficulty: {
        type: String
    },
    high: {
        type: Number
    },
    apiId: {
        type: Number
    },
    imgMedium: {
        type: String
    },
    imgSmall: {
        type: String
    },
    imgSmallMed: {
        type: String
    },
    imgSqSmall: {
        type: String
    },
    latitude: {
        type: Number
    },
    length: {
        type: Number
    },
    location: {
        type: String
    },
    longitude: {
        type: Number
    },
    low: {
        type: Number
    },
    name: {
        type: String
    },
    starVotes: {
        type: Number
    },
    stars: {
        type: Number
    },
    summary: {
        type: String
    },
    type: {
        type: String
    },
    url: {
        type: String
    },
    // Custom fields
    comments: [{
        text: {
            type: String
        }
    }]
});

var Hike = mongoose.model("hikes", HikeSchema);
module.exports = Hike;

/* EXAMPLE OF TRAIL DATA OBJECT FOR REFERENCE */
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