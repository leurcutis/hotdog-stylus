var Outfit = require('../models/outfit_model.js');
var User = require('../models/user_model.js');
var controller = {};

//outfit get -> gets all items in closet
controller.index = function(req, res) {
  Outfit.find({}, function(err, outfit) {
    if (err) {
      throw err;
    }
    res.json(outfit);
  });
};


//outfit create
controller.create = function(req, res) {

  var outfit = new Outfit({
    name: req.body.name,
    hat_id: req.body.hat_id,
    top_id: req.body.top_id,
    jacket_id: req.body.jacket_id,
    bottom_id: req.body.bottom_id,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  outfit.save(function(err) {
    if (err) throw err;

// push outfit into outfit array in user model here
  });
    var user = User.findById('57439dbbbc946f327297cacc', function(err, user) {
    if (err) throw err;
    user.outfits.push(outfit);
    res.json(outfit);
    user.save(function(err) {
      if (err) throw err;
    });
  });
};

controller.show = function(req, res) {
  var id = req.params.id;
  Outfit.find(
    {_id: id},
    function(err, outfit) {
    if (err) {
      throw err;
    }
      res.json(outfit);
  });
};

//outfit update
controller.update = function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var hat_id = req.body.hat_id;
  var top_id = req.body.top_id;
  var jacket_id = req.body.jacket_id;
  var bottom_id = req.body.bottom_id;
  var createdAt = req.body.createdAt;
  var updatedAt = req.body.updatedAt;

  Outfit.findOneAndUpdate(
    {_id: id},
    { name: name,
      hat_id: hat_id,
      top_id: top_id,
      jacket_id: jacket_id,
      bottom_id: bottom_id,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
    function(err, outfit) {
    if (err) {
      throw err;
    }
      res.json(outfit);
  });
};

//outfit destroy
controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  Outfit.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "outfit deleted"});
  });
};

module.exports = controller;
