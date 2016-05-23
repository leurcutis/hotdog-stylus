var mongoose = require('mongoose');
var outfitSchema = new mongoose.Schema({
  name: String,
  hat_id: String,
  top_id: String,
  jacket_id: String,
  bottom_id: String,
  shoes_id: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

var Outfit = mongoose.model('Outfit', outfitSchema);

module.exports = Outfit;

// need to determine data type for id fields
