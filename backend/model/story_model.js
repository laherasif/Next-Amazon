const mongoose = require('mongoose');

const Schema = mongoose.Schema


const storySchema = new Schema({
    userId: {
        type: String,
    },
    username: {
        type: String
    },
    text: {
        type: String
    },
    storyPic: {
        type: String
    },
    profilepicture: {
        type: String
    },
   

},
    { timestamps: true }

);

module.exports = mongoose.model('story', storySchema);