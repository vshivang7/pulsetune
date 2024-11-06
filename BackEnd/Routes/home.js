const express = require('express');
const router = express.Router();
const {User} = require('../Models/userSchema');

router.get("/", (req, res) => res.send("Hello World"));
router.post("/", async (req, res) => {
    let {name, email, password} = req.body;
    let user = new User({
        name: name,
        email: email,
        password: password
    });
    await user.save();
})

module.exports = router;