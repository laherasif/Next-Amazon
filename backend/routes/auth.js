const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
const User = require('../model/auth_model')
const bcrypt = require('bcryptjs');

// REGISTER USERS 

router.post('/register', async (req, res) => {

    const newuser = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        dateofbirth: req.body.day + "-" + req.body.month + "-" + req.body.year,
        gender: req.body.gender,
        password: CryptoJS.AES.encrypt(req.body.password, "facebook").toString(),

    })
    try {

        const Finduser = await User.findOne({ email: req.body.email })
        if (Finduser) {
            return res.status(401).json("User are Already!")
        }
        else {
            let user = await newuser.save()
            res.status(200).json(user)
        }



    } catch (err) {
        res.status(400).json(err)

    }
})


// LOGIN USERS

router.post("/login", async (req, res) => {
  try{
      const user = await User.findOne( {email : req.body.email} );
      if(!user){
     return  res.status(400).json( "Wrong password or username!" );
      }
      
      const bytes = CryptoJS.AES.decrypt(user.password, "facebook");
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  
     if(originalPassword !== req.body.password){
       return  res.status(401).json("Wrong password!");
     }
     else{
      const accessToken = jwt.sign(
        { id: user._id, },
        "facebook",
        { expiresIn: "5d" }
      );
  
      const { password, ...info } = user._doc;
  
      res.status(200).json({ ...info, accessToken });
    }
}
catch(error){
    return  res.status(500).json(error);

}
    });
  

    
module.exports = router;
