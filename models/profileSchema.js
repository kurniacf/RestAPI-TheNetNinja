const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Profile Schema & Model
const ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    city: {
        type: String
    },
    statusProfile: {
        type:Boolean,
        default: false
    }

});

const Profile = mongoose.model("profile", ProfileSchema);

module.exports = Profile;