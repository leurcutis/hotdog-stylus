var express = require('express');
var router = express.Router();
var outfitsController = require('../controllers/outfits_controller.js');

router.route('/')
  .get(outfitsController.index)
  .post(outfitsController.create);


router.route('/:id')
  .patch(outfitsController.update)
  .delete(outfitsController.destroy)
  .get(outfitsController.show);


module.exports = router;
