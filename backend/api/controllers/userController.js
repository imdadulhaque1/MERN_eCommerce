const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/UserModel');

const signUp =async(req, res, next)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = {};
    user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send("User already registered!");

    user = new User(_.pick(req.body, ['name', 'email', 'password']))

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password)
    const token = user.generateJWT();

    try{
        const result = await user.save();
        return res.status(201).send({
            message: "Registration Successful!",
            token: token,
            user: _.pick(result, ["_id", "name", "email"])
        })
    }catch(error){
        return res.status(500).send("Something went wrong!");
    }
}


const signIn =async(req, res, next)=>{

}

module.exports={
    signUp, signIn
}