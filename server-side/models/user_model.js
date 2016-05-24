var mongoose = require('mongoose');
var Outfit = require('../models/outfit_model.js');
var Garment = require('../models/garment_model.js');


var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  avatarUrl: String,
  closet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Garment' }],
  outfits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Outfit' }],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

var User = mongoose.model('User', userSchema);

module.exports = User;
