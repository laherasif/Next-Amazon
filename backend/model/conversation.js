const mongoose = require('mongoose');

const Schema = mongoose.Schema

const membarSchema = new Schema({
    members: {
        type: Array,
    }

},
    { timestamps: true }

);

module.exports = mongoose.model('member', membarSchema);