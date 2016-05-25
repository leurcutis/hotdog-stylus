var express = require('express');
var router = express.Router();
var garmentsController = require('../controllers/garments_controller.js');

router.route('/')
  .get(garmentsController.index)
  .post(garmentsController.create);


router.route('/:id')
  .patch(garmentsController.update)
  .delete(garmentsController.destroy)
  .get(garmentsController.show);


module.exports = router;
