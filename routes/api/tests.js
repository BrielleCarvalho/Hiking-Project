const express = require("express");
const router = express.Router();
const axios = require("axios");
const { apiBaseUrl} = require("../../config/keys.js");

console.log(apiBaseUrl);

router.get("/get-trails-by-lat-long", (req, res) => {

    console.log("in trails by lat long route");

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
});


router.get("/get-trails-by-id", (req, res) => {

    console.log("in trails by id route");

    // https://www.hikingproject.com/data/get-trails-by-id?ids=7001635,7002742,7000108,7002175,7005207&key=200466516-8529d615652675afe116280247200513
    axios.get(`${apiBaseUrl}/data/get-trails-by-id?ids=7001635,7002742,7000108,7002175,7005207&key=200466516-8529d615652675afe116280247200513`)
        .then(response => {
            // console.log("response ", response);
            console.log("success");
            res.json(response.data);
        })
        .catch(err => {
            // console.log("error");
            console.log("err ", err);
            // res.json(err);
        });
});


router.get("/get-conditions-by-id", (req, res) => {

        console.log("in conditions by id route");

        // https://www.hikingproject.com/data/get-conditions?ids=7001635,7002742,7000108,7002175,7005207&key=200466516-8529d615652675afe116280247200513
        axios.get(`${apiBaseUrl}/data/get-conditions?ids=7001635,7002742,7000108,7002175,7005207&key=200466516-8529d615652675afe116280247200513`)
            .then(response => {
                // console.log("response ", response);
                console.log("success");
                res.json(response.data);
            })
            .catch(err => {
                // console.log("error");
                console.log("err ", err);
                // res.json(err);
            });
});



router.get("/get-to-dos", (req, res) => {

        console.log("in get todos");

        // https://www.hikingproject.com/data/get-to-dos?email=alithom123@gmail.com&key=200466516-8529d615652675afe116280247200513
        axios.get(`${apiBaseUrl}/data/get-to-dos?email=alithom123@gmail.com&key=200466516-8529d615652675afe116280247200513`)
            .then(response => {
                // console.log("response ", response);
                console.log("success");
                res.json(response.data);
            })
            .catch(err => {
                // console.log("error");
                console.log("err ", err);
                // res.json(err);
            });
});


module.exports = router;