const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create the User Schema
const UserSchema = new Schema({
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