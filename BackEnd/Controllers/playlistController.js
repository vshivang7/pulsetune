import User from "../Models/userSchema.js";
import Music from "../Models/musicSchema.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const createPlaylist = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;

  if (!name) return next(new ErrorHandler("Playlist name is required", 400));

  const user = await User.findById(req.user._id);

  const playlistExist = user.playlists.some((p) => p.name === name);
  if (playlistExist)
    return next(new ErrorHandler("Playlist already exists", 400));

  user.playlists.push({ name });
  await user.save();

  res.status(201).json(user);
});

export const addMusicToPlaylist = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { _id: musicId } = req.body;

  const user = await User.findById(req.user._id);

  user.playlists = user.playlists.map((playlist) => {
    if (playlist._id.equals(id)) {
      if (!playlist.list.some((m) => m.equals(musicId))) {
        playlist.list.push(musicId);
      }
    }
    return playlist;
  });

  await User.findByIdAndUpdate(user._id, user);
  res.status(200).json(user);
});

export const getPlaylistMusic = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(req.user._id);
  const playlist = user.playlists.find((p) => p._id.equals(id));

  if (!playlist)
    return next(new ErrorHandler("Playlist not found", 404));

  const result = await Promise.all(
    playlist.list.map((musicId) => Music.findById(musicId))
  );

  res.status(200).json(result);
});

export const deletePlaylist = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(req.user._id);
  user.playlists = user.playlists.filter((p) => !p._id.equals(id));

  await User.findByIdAndUpdate(req.user._id, user);
  res.status(200).json(user);
});

export const removeMusicFromPlaylist = catchAsyncErrors(async (req, res, next) => {
  const { playlistId, musicId } = req.params;

  const user = await User.findById(req.user._id);

  user.playlists = user.playlists.map((playlist) => {
    if (playlist._id.equals(playlistId)) {
      playlist.list = playlist.list.filter((m) => !m.equals(musicId));
    }
    return playlist;
  });

  await User.findByIdAndUpdate(req.user._id, user);
  res.status(200).json(user);
});
