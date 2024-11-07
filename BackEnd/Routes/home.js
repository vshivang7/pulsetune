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
    console.log(req.user)
    res.send(req.user)
})

module.exports = router;