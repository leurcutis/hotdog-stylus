var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users_controller.js');

router.route('/')
  .get(usersController.index)
  .post(usersController.create);


router.route('/:id')
  .patch(usersController.update)
  .delete(usersController.destroy)
  .get(usersController.show);


module.exports = router;
