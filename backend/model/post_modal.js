const mongoose = require('mongoose');

const Schema = mongoose.Schema

const postSchema = new Schema({
    userId: {
        type: String,
    },
    username: {
        type: String
    },
    postdesc: {
        type: String
    },
    bgimage: {
        type: String
    },
    postimage: {
        type: String
    },
    location: {
        type: String
    },
    like: {
        type: Array
    },
    commint: {
        type: [Schema.Types.ObjectId],
        ref: 'commint'
    },
    share: {
        type: Array
    },
    sharepostid: {
        type: String
    },
    sharedesc : {
        type:String,
    },
    shareusername : {
        type:String,
    },
    shareprofilepicture : {
        type:String,
    }


},
    { timestamps: true }

);

module.exports = mongoose.model('post', postSchema);