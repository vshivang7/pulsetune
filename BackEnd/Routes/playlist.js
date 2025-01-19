const express = require('express');
const User = require('../Models/userSchema');
const Music = require('../Models/musicSchema');
const { default: mongoose } = require('mongoose');
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
router.post("/:name", async (req, res) => {
    let {name} = req.params;
    let {image, song_name, artist, url} = req.body;
    let musicInfo = new Music({image, song_name, artist, url});
    await musicInfo.save();
    musicInfo = await Music.findOne({url:url});
    // console.log(musicInfo)
    let currUser = await User.findById(req.user._id)
    currUser.playlists.map((playlist) => {
        if(playlist.name===name) {
            playlist.list.push(musicInfo._id)
            return;
        }
    })
    await currUser.save()
    // console.log(currUser)
    res.json(currUser)
})
router.get('/:id', async (req, res) => {
    let {id} = req.params;
    let user = await User.findById(req.user._id);
    let musicArr;
    user.playlists.map((playlist) => {
        if(playlist._id == id) {
            musicArr = playlist.list;
        }
    })
    let result = await Promise.all(
        musicArr.map(async (music_id) => {
            return await Music.findById(music_id);
        })
    );
    res.send(result);
})
router.delete('/:id', async (req, res) => {
    let {id} = req.params;
    let user = await User.findById(req.user._id);
    user.playlists = user.playlists.filter(playlist => playlist._id.toString() !== id);
    await user.save();
    res.send(user);
})

module.exports = router;