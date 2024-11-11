const express = require('express');
const User = require('../Models/userSchema');
const router = express.Router();

router.post("/new", async (req, res) => {
    try{
        console.log(req.body.name)
        if (!req.body.name) {
            return res.status(400).json({ error: "Playlist name is required" });
        }
        let user = await User.findById(req.user._id);
        // console.log(user)
        let playlistExist = user.playlists.some((playlist) => playlist.name === req.body.name)
        if(playlistExist) {
            return res.status(400).json({ error: "Playlist already is exist" });
        }
        user.playlists.push({ name : req.body.name});
        // console.log(user)
        await user.save()
        // console.log(user)
        res.send(user)
    }catch (e) {
        console.log(e)
        res.status(500).json({ error: "An error occurred while creating the playlist" });
    }
})

module.exports = router;