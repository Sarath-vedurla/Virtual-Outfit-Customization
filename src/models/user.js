const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20,
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address:"+value);
            }
        },

    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong Password:"+value);
            }
        },
    }

    },
    {
    timestamps : true,

});

userSchema.methods.getJWT = async function () {
    const user = this;

    const token = await jwt.sign({_id: user._id},"VISWA@ch$12323",{
        expiresIn : "7d",
    });
    return token;
    
};

userSchema.methods.validatePassword =async function(passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;
    const isPaswordValid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    );
    return isPaswordValid;
}


module.exports  = mongoose.model("User",userSchema);

