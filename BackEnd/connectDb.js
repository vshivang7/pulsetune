const mongoose = require('mongoose');

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/test');
}

module.exports = main;