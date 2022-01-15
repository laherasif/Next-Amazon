const express = require('express');
const router = express.Router();
const Conversation = require('../model/conversation')
const Message = require('../model/messages')
// REGISTER COVERSATION  

router.post('/', async (req, res) => {

    try {


        const Finduser = await Conversation.findOne({
            members: { $all: [req.body.senderId, req.body.reciverId] }
        })

        if (!Finduser) {
            const newConvesation = new Conversation({
                members: [req.body.senderId, req.body.reciverId]
            })
            let convesation = await newConvesation.save()
            res.status(200).json(convesation)
        }
        else {
            res.status(400).json("Conversation already have")
        }

    } catch (err) {
        res.status(500).json("err")

    }
})

// GET ALL CONVERSATION 

router.get("/getallconv/:userId", async (req, res) => {
    try {
        const FindConv = await Conversation.find({})
     
        let filterDta = FindConv.filter((i) => {
            return i.members.includes(req.params.userId)
        })

        
         

        let arr =[]
        let message = await Promise.all(
            filterDta.map((i) => {
            return  Message.find({ conversationId: i._id }).sort({createdAt : -1})
            
        }))

      
        res.status(200).json({filterDta : filterDta , arr:  message} )
    }
    catch (error) {
        return res.status(500).json(error);

    }
});


// GET CONVERSATION 

router.get("/find/:senderId/:reciverId", async (req, res) => {
    try {
        const FindConv = await Conversation.findOne({
            members: { $all: [req.params.senderId, req.params.reciverId] }
        })
        res.status(200).json(FindConv)
    }
    catch (error) {
        return res.status(500).json(error);

    }
});



module.exports = router;
