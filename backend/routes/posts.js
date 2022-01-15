
const express = require('express');
const router = express.Router();

const Post = require('../model/post_modal')
const User = require('../model/auth_model')
const Commint = require('../model/commint')
const upload = require('../Config/multer')
const Notification = require('../model/notification')

// POST REGISTER 
router.post('/Add',  upload.single('file'), async (req, res) => {
    console.log("req.body", req.body)
    const newpost = new Post({
        userId: req.body.userId,
        username: req.body.username,
        postdesc: req.body.postdesc,
        poststatus: req.body.status,
        bgimage: req.file ? req.file.filename : null,
        // location : req.body.location,


    })
    try {


        let posts = await newpost.save()
        res.status(200).json(posts)



    } catch (err) {
        res.status(400).json(err)

    }
})


// ADD SIMPLE PICTUER IN STORY 


router.post('/AddPic',  upload.single('file'), async (req, res) => {
    console.log("req.body", req.body)
    const newpost = new Post({
        userId: req.body.userId,
        username: req.body.username,
        postdesc: req.body.postdesc,
        postimage: req.file ? req.file.filename : null,
        // location : req.body.location,
    })
    try {

        let posts = await newpost.save()
        res.status(200).json(posts)



    } catch (err) {
        res.status(400).json(err)

    }
})

// Get a Post  id 

router.get("/:userId", async (req, res) => {

    try {
        const currentUser = await User.findById(req.params.userId)
        const post = await Post.findOne({ userId: currentUser._id });
        const posts = await Post.find({ userId: currentUser._id });
        console.log("post" , post)

        const sharePost = await Promise.all(
            post.share.map((i) => {
               return Post.find({ sharepostid : i })
            })
        )

        console.log("post share" , sharePost)
        res.status(200).json(posts.concat(...sharePost));
    } catch (err) {
        res.status(500).json(err);
    }
});


// Timeline Get All Friends

router.get("/timeline/:userId", async (req, res) => {
    try {
        // const posts = await Post.find({});
        const currentUser = await User.findById(req.params.userId)
        const findPost = await Post.find({ userId: currentUser._id }).sort({ "createdAt": -1 })
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


// LIKE AND DISLIKE POST 

router.post("/like/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.like.includes(req.body.userId)) {
            const like = await post.updateOne({ $push: { like: req.body.userId } });
            res.status(200).json(like);
        } else {
            const dislike = await post.updateOne({ $pull: { like: req.body.userId } });
            res.status(200).json(dislike);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// SHARE POST 

router.post("/share/:userId", async (req, res) => {
    try {
        // const posts = await Post.find({});
        const currentUser = await Post.findById(req.params.userId)
        if (!currentUser.like.includes(req.params.userId)) {
            const post = await Post.updateOne({ $push: { like: req.params.userId } })
            res.status(200).json(post);
        }
        else {
            const unlike = await Post.updateOne({ $Pull: { like: req.params.userId } })
            res.status(400).json(unlike);
        }

    }
    catch (error) {
        return res.status(500).json(error);

    }
});

// COMMINT POST

router.post("/addCommint", async (req, res) => {
    try {

        const newCommint = new Commint({
            sender: req.body.senderId,
            postId: req.body.postid,
            commint: req.body.text,
            username: req.body.username,
            profilePicture : req.body.profilePicture,
        })

        let comment = await newCommint.save()

        await Post.findByIdAndUpdate(
            { _id: req.body.postid },
            { $push: { commint: comment._id } },
            { new: true }
        )
        res.status(200).json(comment)

    }
    catch (error) {
        return res.status(500).json(error);

    }
});


// COMMINT GET

router.get("/getcommint/:userId", async (req, res) => {

    try {
        let CommintFinder = await Commint.find({ postId: req.params.userId })

        res.status(200).json(CommintFinder)

    }
    catch (error) {
        return res.status(500).json(error);

    }
});





// NOTIFICATION GET

router.get("/getNotification/:userId", async (req, res) => {
      console.log("req" , req.params)
    try {
        let NotifiFinder = await Notification.find({ recipient: req.params.userId }).sort({createdAt : -1})

        res.status(200).json(NotifiFinder)

    }
    catch (error) {
        return res.status(500).json(error);

    }
});

// SHARE POST WITH FRIEND

router.post('/sharePost'  , async (req, res) => {
    try {

        const newsharePost = new Post({
            // userId: req.body.sender,
            sharepostid : req.body.postId,
            shareusername: req.body.shareusername,
            sharedesc: req.body.sharedesc,
            shareprofilepicture: req.body.senderProfilePicture,
            postdesc: req.body.postdesc,
            bgimage: req.body.bgImage ? req.body.bgImage : null  ,
            postimage : req.body.postImage ? req.body.postImage : null
    
        })
     
          const updatedRecipient = await Post.findOneAndUpdate(
            { userId: req.body.reciever , share: { $nin: [req.body.postId] }},
            {
              $push: { share:  req.body.postId }},
            { new: true }
          );

         

         await newsharePost.save()


          
        
    } catch (err) {
        res.status(500).json(err);
    }
})






module.exports = router;
