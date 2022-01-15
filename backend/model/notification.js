const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    profilePicture: {
      type: String
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model('notification', notificationSchema);
