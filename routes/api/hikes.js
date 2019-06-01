const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const passport = require("passport");
const trails = require("../../config/seedtrails2");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
// const User = require("../../models/User");


// Load Hikes model
const Hike = require("../../models/Hike");


router.get("/", (req, res) => {


        Hike.find({}).then(hikes => {

                return res.json(hikes);
        });
});


router.post("/", (req, res) => {

        console.log(`req.body = %o`, req.body);

        const newHike = new Hike({
                ...req.body
        });


        // const newHike = new Hike({
        //         ascent: 1000,
        //         conditionDate: '10/01/1982',
        //         conditionDetails: 'Heavy rainfall makes river crossing dangerous.',
        //         conditionStatus: 'Dangerous',
        //         descent: 500,
        //         difficulty: 'Very Hard',
        //         high: 10000,
        //         apiId: 1234567890,
        //         imgMedium: '',
        //         imgSmall: '',
        //         imgSmallMed: '',
        //         imgSqSmall: '',
        //         latitude: 0.0,
        //         length: 2.5,
        //         location: 'Austin, TX',
        //         longitude: 0.0,
        //         low: 0,
        //         name: 'Greenbelt',
        //         starVotes: 120,
        //         stars: 4.5,
        //         summary: 'A great first trail to get your feet wet in Austin',
        //         type: '?',
        //         url: '',
        //         comments: [{ "text": "comment 1"}, { "text": "comment2"}]
        // });

        newHike
            .save()
            .then(hike => res.json(hike))
            .catch(err => console.log(`Error in post hike api call: %o`, err));

});


router.post("/comment", (req, res) => {

        // Find one by Id, Then do an update
        Hike.findOneAndUpdate({_id: req.body.hikeId}, {$push: {comments: { "text": req.body.comment}}})
            .then(hike => res.json(hike))
            .catch(err => console.log(`Error in post comment api call: %o`, err));
});

router.post("/create-demo-data", (req, res) => {

        const hikes = req.body;

        hikes.forEach( hike => {
                let newHike = new Hike({
                        ...hike
                });

                newHike
                    .save()
                    .then(savedHike => res.json(savedHike))
                    .catch(err => console.log(`Error in post hike api call: %o`, err));
        })

});

router.get("/all", (req, res) => {
        // Form validation

        // const {
        //     errors,
        //     isValid
        // } = validateRegisterInput(req.body);

        // Check validation
        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        // Trails.find({}).then(trails => {

        return res.json(trails);

        // if (user) {
        //     return res.status(400).json({
        //         email: "A user with this email already exists"
        //     });
        // } else {
        //     const newUser = new User({
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: req.body.password
        //     });

        // Hash password before saving in database
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(newUser.password, salt, (err, hash) => {
        //         if (err) throw err;
        //         newUser.password = hash;
        //         newUser
        //             .save()
        //             .then(user => res.json(user))
        //             .catch(err => console.log(err));
        //     });
        // });
        // }
        // });
});


router.get("/comment", (req, res) => {

        return res.json(trails);
});


module.exports = router;


/* POSTMAN JSON FOR CREATE HIKE */
// {
//         "ascent": 1000,
//     "conditionDate": "10/01/1982",
//     "conditionDetails": "Heavy rainfall makes river crossing dangerous.",
//     "conditionStatus": "Dangerous",
//     "descent": 500,
//     "difficulty": "Very Hard",
//     "high": 10000,
//     "apiId": 1234567890,
//     "imgMedium": "",
//     "imgSmall": "",
//     "imgSmallMed": "",
//     "imgSqSmall": "",
//     "latitude": 0.0,
//     "length": 2.5,
//     "location": "Austin, TX",
//     "longitude": 0.0,
//     "low": 0,
//     "name": "Greenbelt",
//     "starVotes": 120,
//     "stars": 4.5,
//     "summary": "A great first trail to get your feet wet in Austin",
//     "type": "?",
//     "url": ""
// }