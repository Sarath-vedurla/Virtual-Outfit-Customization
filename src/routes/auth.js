const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");

const bcrypt = require("bcrypt");



authRouter.post("/signup", async (req, res) => {
    try {
      // Validate signup data
      validateSignUpData(req);
  
      const { userName, emailId, password } = req.body;
  
      // Encrypt the password
      const passwordHash = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({
        userName,
        emailId,
        password: passwordHash,
      });
      await user.save();
  
      // Create JWT token after user is successfully created
      const token = await user.getJWT();
  
      // Send the token in a cookie
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000), // 8 hours expiry
        httpOnly: true, // Prevent client-side access to the cookie
         // Only use HTTPS in production
      });
  
      // Send user object or a success message after setting cookie
      res.send(user);
    } catch (err) {
      res.status(400).send("ERROR:" + err.message);
    }
  });
  
  

authRouter.post("/login", async(req,res)=>{
    try{
        const{emailId, password} = req.body;
        const user = await User.findOne({emailId: emailId});
        if(!user){
            throw new Error("Invalid credentials");
        }
        const isPaswordValid = await user.validatePassword(password);
        if(isPaswordValid){
            //create JWT token
            const token = await user.getJWT();
          

            //add the token to cookie and send the response back to user
            res.cookie("token",token, {
                expires: new Date(Date.now() + 8 *3600000)
            });


            res.send(user);
        }else{
            throw new Error("Invalid credentials");
        }

    }
    catch (err){
        res.status(400).send("ERROR:" +err.message);
    }
});

authRouter.post("/logout", async(req, res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
    });
    res.send("Logout Successful!!");

});
module.exports = authRouter;