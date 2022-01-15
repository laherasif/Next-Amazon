const express = require('express');
const router = express.Router();
const User = require('../model/auth_model')
const upload = require('../Config/multer')
const Story = require('../model/story_model')


// POST REGISTER 
router.post('/Add', upload.single('file'), async (req, res) => {
    console.log("req.body", req.body)
    const newStory = new Story({
        userId: req.body.userId,
        username: req.body.username,
        text: req.body.text,
        profilepicture: req.body.profilepic,
        storyPic:  req.file.filename



    })
    try {
        const currentUser = await User.findById(req.body.userId)
        const friendPosts = await Promise.all(
            currentUser.friends.map((friendId) => {
               return  User.findOneAndUpdate(
                        { friendId: req.body.userId || currentUser._id == req.body.userId  , status: { $nin: [req.body.userId] } },
                        { $push: { status: req.body.userId } },
                        { new: true }
               )
            })
        )
            let story = await newStory.save()
            res.status(200).json(story)




    } catch (err) {
        res.status(500).json(err)

    }
})


// Get a Post  id 

router.get("/:userId", async (req, res) => {

    try {
        const story = await Story.find({ userId: req.params.userId });
        const stories = await Story.find({});
        res.status(200).json({story : story , stories : stories });
    } catch (err) {
        res.status(500).json(err);
    }
});


// Timeline Get All Friends

router.get("/timelineStories/:userId", async (req, res) => {
    try {
        // const posts = await Post.find({});
        let arr =[]
        const currentUser = await User.findById(req.params.userId)
        const friendPosts = await Promise.all(
            currentUser.status.map((friendId) => {
                return User.findById({ _id: friendId })
            })
        )
        
        let newarry = arr.concat(...friendPosts)
        

        res.status(200).json(newarry);
    }
    catch (error) {
        return res.status(500).json(error);

    }
});




router.get("/getStory", async (req, res) => {

    try {
        const story = await Story.find({});
        res.status(200).json( story  );
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;
