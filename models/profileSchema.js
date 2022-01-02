const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create GeoLocation with GeoJSON
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

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
    },
    geometry: GeoSchema
});

const Profile = mongoose.model("profile", ProfileSchema);

module.exports = Profile;