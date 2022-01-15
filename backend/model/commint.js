const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commintSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'post'
    },
    postId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'post'
    },
    commint: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    profilePicture: {
      type: String
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model('commint', commintSchema);
