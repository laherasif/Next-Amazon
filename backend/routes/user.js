const express = require('express');
const router = express.Router();
const User = require('../model/auth_model')
const FriendRequest = require('../model/friendRequest')
const upload = require('../Config/multer')

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
  const Friends = []
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ firstname: username });
    const findFriends = await Promise.all(user.friends.map((f) => {
      return User.find({ _id: f })
    }))

  
  
    const { password, updatedAt, ...other } = user._doc;
    let Fr = Friends.concat(...findFriends)
    res.status(200).json({ ...other, Fr });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get All Online Friends


router.get("/onlineUsers/:userId", async (req, res) => {

  try {
    let Arr = []
    const currentUser = await User.findById(req.params.userId)
    const onlionUsers = await Promise.all(
      currentUser.friends.map((friendId) => {
        return User.find({ _id: friendId })
      })
    )
    res.status(200).json(Arr.concat(...onlionUsers));
  }
  catch (error) {
    return res.status(500).json(error);

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





// COVER PICTURE UPDATE 

router.post("/uploadCoverPicture/:id", upload.single('file'), async (req, res) => {
  console.log("req cover", req.file)
  try {
    let cover = await User.findByIdAndUpdate(req.params.id, {
      $set: {
        coverpicture: req.file.filename
      }
    })
    res.status(200).json(cover);
  } catch (err) {
    res.status(500).json(err);
  }
});


// COVER PICTURE UPDATE 

router.post("/uploadProfilePicture/:id", upload.single('file'), async (req, res) => {
  console.log("req profile", req.file)

  try {
    let profile = await User.findByIdAndUpdate(req.params.id, {
      $set: {
        profilepicture: req.file.filename
      }
    })
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
});



// GET FRIEND REQUESTS


router.get('/getrequests', async (req, res) => {
  try {
    const friendRequest = await FriendRequest.find({})
    res.status(200).json(friendRequest)

  } catch (err) {
    res.status(400).json(err)

  }
})


// Friend Requests


router.post('/addfriendRequests', async (req, res) => {
  let sender = req.body.myId
  let recipt = req.body.friendId
  try {

    const foundFriendRequest = await FriendRequest.findOne({
      sender: sender,
      recipient: recipt,
    });
    if (foundFriendRequest) {
      return res.status(400).send(foundFriendRequest);
    }



    let AddFriend = new FriendRequest({
      sender: sender,
      recipient: recipt,
      status: "pending"
    })
    let add = await AddFriend.save()

    res.status(200).json(add)

  }
  catch (err) {

  }
})
// Get One Friend Requests 

router.get("/getfriendRequest/:userId", async (req, res) => {

  try {

    const listData2 = []

    const friendR2 = await FriendRequest.find({
      recipient: req.params.userId,
      status: "pending"
    }).sort({ "createdAt": -1 }).limit(1)


    const userFind = await Promise.all(
      friendR2.map((friend) => {
        return User.find({ _id: friend.sender })

      })
    )
    res.status(200).json(listData2.concat(...userFind))



  }
  catch (error) {
    return res.status(500).json(error);

  }
});

// Get All Friend Requests 

router.get("/allfriendRequest/:userId", async (req, res) => {

  try {

    const listData2 = []

    const friendR2 = await FriendRequest.find({
      recipient: req.params.userId,
      status: "pending"
    }).sort({ "createdAt": -1 })


    const userFind = await Promise.all(
      friendR2.map((friend) => {
        return User.find({ _id: friend.sender })

      })
    )
    res.status(200).json(listData2.concat(...userFind))



  }
  catch (error) {
    return res.status(500).json(error);

  }
});




// Friend Request Confirm

router.post('/confirmRequest', async (req, res) => {
  const recipientId = req.body.myId;
  const senderId = req.body.friendId;
  const updatedSender = await User.findOneAndUpdate(
    { _id: senderId, friends: { $nin: [recipientId] } },
    { $push: { friends: recipientId } },
    { new: true }
  );
  const updatedRecipient = await User.findOneAndUpdate(
    { _id: recipientId, friends: { $nin: [senderId] } },
    {
      $push: { friends: senderId },
    },
    { new: true }
  );
  if (updatedRecipient) {
    const updatedFriendRequest = await FriendRequest.findOneAndUpdate(
      {
        sender: senderId,
        recipient: recipientId,
      },
      {
        $set: { status: 'accepted' },
        $push: { friendshipParticipants: [senderId, recipientId] },
      },
      { new: true }
    );

    const updatedRequests = await FriendRequest.find({
      recipient: req.body.friendId,
      status: 'pending',
    });
    res.status(200).send({
      updatedRequests: updatedFriendRequest,
      updatedRequest: updatedRequests,
      updatedUserFriends: updatedRecipient.friends,
    });
  }
});

// UNFRRIEND REQUEST 
router.post('/unfriendRequest', async (req, res) => {
  const recipientId = req.body.myId;
  const senderId = req.body.friendId;

  const updatedSender = await User.findOneAndUpdate(
    { _id: senderId, },
    { $pull: { friends: recipientId } },
    { new: true }
  );
  const updatedRecipient = await User.findOneAndUpdate(
    { _id: recipientId },
    {
      $pull: { friends: senderId },
    },
    { new: true }
  );
  if (updatedRecipient) {
    const updatedFriendRequest = await FriendRequest.findOneAndDelete(
      {
        $and: [
          { friendshipParticipants: { $in: [senderId] } },
          { friendshipParticipants: { $in: [recipientId] } }
        ]

      }
    );


    res.status(200).send({
      updatedFriendRequest: updatedFriendRequest,
      updatedRequest: updatedSender,
    });
  }
});


// UNFRRIEND REQUEST 
router.post('/rejectfriendRequest', async (req, res) => {
  console.log("req" , req.body)
  const recipientId = req.body.myId;
  const senderId = req.body.friendId;
  const updatedFriendRequest = await FriendRequest.findOneAndDelete(
    {
      sender: senderId,
      recipient: recipientId,


    }

  );
  const updatedRequests = await FriendRequest.find({
    recipient: req.body.friendId,
    status: 'pending',
  });
  res.status(200).send({
    updatedFriendRequest: updatedFriendRequest,
    updatedRequest: updatedRequests,
  });
});

router.post('/cencelfriendRequest', async (req, res) => {
  console.log("cencel" , req.body)
  const recipientId = req.body.friendId;
  const senderId = req.body.myId;
  const updatedFriendRequest = await FriendRequest.findOneAndDelete(
    {
      sender: senderId,
      recipient: recipientId,


    }

  );
  
  res.status(200).send({
    updatedFriendRequest: updatedFriendRequest,
  });
});




module.exports = router;
