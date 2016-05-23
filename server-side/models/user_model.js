var mongoose = require('mongoose');
var outfit = require('../models/outfit_model.js');
var closet = require('../models/garment_model.js');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  avatarUrl: String,
  closet: [],
  outfits: [],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

var User = mongoose.model('User', userSchema);

module.exports = User;
