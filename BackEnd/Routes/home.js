const express = require('express');
const router = express.Router();
const User = require('../Models/userSchema');
const passport = require('passport');
const Music = require('../Models/musicSchema');

router.get("/", (req, res) => console.log(req.user));
router.post("/signup", async (req, res) => {
    let {username, email, password} = req.body;
    let user = new User({
        username: username,
        email: email,
    });
    
    try{
        await User.register(user, password);
        res.sendStatus(200)
    }
    catch (error) {
        res.sendStatus(404)
    }
})
router.post("/login", passport.authenticate("local"), async (req, res) => {
    let {_id, email, username, playlists} = req.user;
    let data = {_id: _id, email: email, username:username, playlists:playlists};
    res.json(data)
})
router.get("/userExist", (req, res) => {
    if(req.isAuthenticated()) res.json(req.user)
    else res.send(null)
})
router.get("/logout", (req, res) => {
    if(req.isAuthenticated()){
    req.logout((err) => {
        if(err) return next(err)
    });
    }
    res.send(null);
})
router.get("/fetchData", async (req, res) => {
    let data = await Music.find();
    res.send(data);
})

module.exports = router;