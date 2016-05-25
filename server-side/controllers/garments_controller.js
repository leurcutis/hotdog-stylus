var Garment = require('../models/garment_model.js');
var User = require('../models/user_model.js');
var controller = {};

//closet get -> gets all items in closet
controller.index = function(req, res) {
  Garment.find({}, function(err, garment) {
    if (err) {
      throw err;
    }
    res.json(garment);
  });
};


//garment create
controller.create = function(req, res) {

  var garment = new Garment({
    name: req.body.name,
    type: req.body.type,
    size: req.body.size,
    color: req.body.color,
    imageUrl: req.body.imageUrl,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  garment.save(function(err) {
    if (err) throw err;

  // push garment into closet array in user model here
  });
  var user = User.findById('57439dbbbc946f327297cacc', function(err, user) {
    if (err) throw err;
    user.closet.push(garment);
    res.json(garment);
    user.save(function(err) {
      if (err) throw err;
    });
  });
};

controller.show = function(req, res) {
  var id = req.params.id;
  Garment.findOne(
    {_id: id},
    function(err, outfit) {
    if (err) {
      throw err;
    }
      res.json(outfit);
  });
};

//garment update
controller.update = function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var type = req.body.type;
  var size = req.body.size;
  var color = req.body.color;
  var image = req.body.imageUrl;
  var createdAt = req.body.createdAt;
  var updatedAt = req.body.updatedAt;

  Garment.findOneAndUpdate(
    {_id: id},
    { name: name,
      type: type,
      size: size,
      color: color,
      image: image,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
    function(err, garment) {
    if (err) {
      throw err;
    }
      res.json(garment);
  });
};

//todo destroy
controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  Garment.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "garment deleted"});
  });
};

module.exports = controller;
