const mongoose = require('mongoose');

const Schema = mongoose.Schema


const authSchema = new Schema({
    firstname: {
        type: String,
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    coverpicture: {
        type: String
    },
    profilepicture: {
        type: String
    },
    isadmin: {
        type: String
    },
    fllowings: {
        type: Array
    },
    fllowers: {
        type: Array
    },
    friends: {
        type: Array
    },
    status: {
        type: Array
    },
    bio: {
        type: String
    },
    friendRequests: {
        type: [Schema.Types.ObjectId],
        ref: 'auth'
    },
    friendRequest: {
        type: Boolean,
        default: false
    }



},
    { timestamps: true }

);

module.exports = mongoose.model('auth', authSchema);