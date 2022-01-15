const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendRequestSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'auth'
    },
    recipient: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'auth'
    },
    status: {
      type: String,
      required: true
    },
    friendshipParticipants: {
      type: [Schema.Types.ObjectId]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('FriendRequest', friendRequestSchema);
