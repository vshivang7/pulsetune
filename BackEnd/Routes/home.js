const express = require('express');
const router = express.Router();
const User = require('../Models/userSchema');
const passport = require('passport');

router.get("/", (req, res) => res.send("Hello World"));
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
    let {_id, email, username} = req.user;
    let data = {_id: _id, email: email, username:username};
    console.log(data)
    res.send(data)
})

module.exports = router;