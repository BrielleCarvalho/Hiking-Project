const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const trails = require("../../config/seedTrails");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
// const User = require("../../models/User");

// @route GET api/trails
// @desc Get all trails in database
// @access Public
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



module.exports = router;