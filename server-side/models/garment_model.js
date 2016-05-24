var mongoose = require('mongoose');
var user = require('../models/user_model.js');

var garmentSchema = new mongoose.Schema({

  name: String,
  type: String,
  size: String,
  color: String,
  imageUrl: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},

});

var Garment = mongoose.model('Garment', garmentSchema);

module.exports = Garment;
