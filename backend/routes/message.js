const express = require('express');
const router = express.Router();
const Message = require('../model/messages')

// REGISTER MESSAGE  

router.post('/addmessage', async (req, res) => {

    try {
        const newMessage = new Message(req.body)
        let user = await newMessage.save(newMessage)
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)

    }
})


// GET  MESSAGE 

router.get("/getmessage/:id", async (req, res) => {
     console.log("req",req.params)
    try {
        const findMessage = await Message.find({ conversationId: req.params.id })

        res.status(200).json(findMessage)
    }
    catch (error) {
        return res.status(500).json(error);

    }
});



module.exports = router;
