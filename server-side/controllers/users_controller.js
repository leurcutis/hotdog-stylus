var User = require('../models/user_model.js');
var controller = {};

//user get -> shows an index of users
controller.index = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      throw err;
    }
    res.json(user);
  });
};


//user create
controller.create = function(req, res) {

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    avatarUrl: req.body.avatarUrl,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  user.save(function(err) {
    if (err) throw err;
    res.json(user);
  });
};

controller.show = function(req, res) {
  var id = req.params.id;
  User.findOne(
    {_id: id},
    function(err, user) {
    if (err) {
      throw err;
    }
      res.json(user);
  });
};

//user update
controller.update = function(req, res) {
  var id = req.params.id;
  var firstName = req.params.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var avatarUrl = req.body.avatarUrl;
  var createdAt = req.body.createdAt;
  var updatedAt = req.body.updatedAt;

  User.findOneAndUpdate(
    {_id: id},
    { firstName: firstName,
      lastName: lastName,
      email: email,
      avatarUrl: avatarUrl,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
    function(err, user) {
    if (err) {
      throw err;
    }
  });
};

//user destroy
controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  User.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "user deleted"});
  });
};

// code that destroys associated garments and outfits when a user is destroyed

module.exports = controller;
