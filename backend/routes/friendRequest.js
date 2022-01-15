const express = require('express');
const router = express.Router();
// const FriendRequest = require('../model/friendRequest')

router.get("/getUser", async (req, res) => {
  try {
    const user = await User.find({})
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});




// Get post by username or id 

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Timeline Get All Friends

router.get("/timeline/:userId", async (req, res) => {
  try {
    // const posts = await Post.find({});
    const currentUser = await User.findById(req.params.userId)
    const findPost = await Post.find({ userId: currentUser._id })
    const friendPosts = await Promise.all(
      currentUser.friends.map((friendId) => {
        return Post.find({ userId: friendId })
      })
    )
    res.status(200).json(findPost.concat(...friendPosts));
  }
  catch (error) {
    return res.status(500).json(error);

  }
});


// Friend Requests

// router.post("/friendRequests", async (req, res) => {
//   try {
//     const findFriend = await User.findById({ _id: req.body.friendId })

//     if (!findFriend.friendRequests.includes(req.body.myId)) {
//       await findFriend.updateOne({ $push: { friendRequests: { request: req.body.myId ,  status: "pending" } } });
//     }
//     const senderFriend = await User.findById({ _id: req.body.myId })
//     if (!senderFriend.friendRequests.includes(req.body.friendId)) {
//       await senderFriend.updateOne({ $push: { friendRequests: { request: req.body.friendId, } } });

//     }

//     res.status(200).json(findFriend)
//   }
//   catch (error) {
//     return res.status(500).json(error);

//   }
// });


// app.post("/friendRequests", function(req, res) {
//   var pendingIds, friendIds;
//   if (req.user.pendingFriends.length > 0) {
//       pendingIds = new Array(req.user.pendingFriends.length - 1);
//       req.user.pendingFriends.forEach(function (pendingFriend) {
//           pendingIds.push(pendingFriend._id);
//           console.log("Pending friend id: " + pendingFriend._id);
//       })
//   }
//   if (req.user.friends.length > 0) {
//       friendIds = new Array(req.user.friends.length - 1);
//       req.user.friends.forEach(function (friend) {
//           friendIds.push(friend._id);
//           console.log("Friend id: " + friend._id);
//       })
//   }
//   var conditions = {
//       $or: [
//           {$and: [
//               {_id: {$nin: pendingIds}}, // not a pending friend of U2
//               {_id: {$nin: friendIds}},        // not a friend of U2
//               {username: req.body.globalUserName},
//               {'pendingFriends._id.toString()': {$ne: req.user._id.toString()}}, // U2 is not a pending friend
//               {'friends._id.toString()': {$ne: req.user._id.toString()}}         // U2 is not a friend
//           ]}
//       ]
//   }
//   var update = {
//       $addToSet: {pendingFriends: { _id: req.user._id.toString(), username: req.user.username, language: req.user.language, profilePicture: req.user.profilePicture}}
//   }

//   User.findOneAndUpdate(conditions, update, function(error, doc) {
//       if(error) {
//           console.log(currentTime + " - FRIEND_REQUEST_SEND_ERROR: '" + req.user.username + "' TRIED TO SEND A FRIEND REQUEST TO '" + req.body.globalUserName + "'");
//       }
//       else {
//           console.log(currentTime + " - FRIEND_REQUEST_SENT: '" + req.user.username + "' SENT A FRIEND REQUEST TO '" + req.body.globalUserName + "'");
//       }
//       res.redirect("/talk");
//   });
// });


router.post('/addfriendRequests', async (req, res) => {
    console.log("req, " , req.body)
  let sender = req.body.myId
  let recipt = req.body.friendId

  try {
      
  }
  catch (err) {

  }
})

// Get All Friend Requests 

router.get("/allfriendRequest/:userId", async (req, res) => {
  try {
    // const posts = await Post.find({});
    const currentUser = await User.findById(req.params.userId);
    const findFriendRequest = await Promise.all(
      currentUser.friendRequests.map((friendId) => {
        return User.find({ _id: friendId.request })

      })
    )

    console.log("findFriendRequest", findFriendRequest)
    res.status(200).json(findFriendRequest);
  }
  catch (error) {
    return res.status(500).json(error);

  }
});




// Friend Request Confirm

router.post("/confirmRequest", async (req, res) => {
  try {
    if (req.body.friendRequest === true) {
      let user = await User.findByIdAndUpdate({ _id: req.body._id }, {
        $set: {
          friendRequest: false
        }
      })
      res.status(200).json(user)

    }
    else {
      let user = await User.findByIdAndUpdate({ _id: req.body._id }, {
        $set: {
          friendRequest: true
        }
      })
      res.status(200).json(user)
    }

  }

  catch (error) {
    return res.status(500).json(error);

  }
});





module.exports = router;
