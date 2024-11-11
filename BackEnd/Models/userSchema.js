const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Music = require('./musicSchema');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    playlists: [{
      name : {
        type: String,
        required: true,
      },
      list: [{type: mongoose.Schema.Types.ObjectId, ref: 'Music'}]
    }],
  });

  userSchema.plugin(passportLocalMongoose);

  const User = mongoose.model('User', userSchema);

  module.exports = User;