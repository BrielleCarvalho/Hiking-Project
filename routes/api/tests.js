const express = require("express");
const router = express.Router();
const axios = require("axios");
const { apiBaseUrl} = require("../../config/keys.js");

console.log(apiBaseUrl);

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/get-trails-by-lat-long", (req, res) => {

    console.log("in route");

    axios.get(`${apiBaseUrl}/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200466516-8529d615652675afe116280247200513`)
        .then( response => {
            // console.log("response ", response);
            console.log("success");
            res.json(response.data);
        })
        .catch( err => {
            // console.log("error");
            console.log("err ", err);
            // res.json(err);
        });


    // https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200466516-8529d615652675afe116280247200513

    // const axios = require('axios');
    //
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //     .then(response => {
    //         console.log(response.data.url);
    //         console.log(response.data.explanation);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    });


module.exports = router;