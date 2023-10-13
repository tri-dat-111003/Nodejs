const express = require('express');
const router = express.Router();

//const mygroupModel = require('../models/mygroup');
const mygroupController = require('../controllers/controller');


// / endpoint
router.get('/', mygroupController.getAll);

// /<MSSV>/<id> endpoint
router.route('/:MSSV/:id')
  .post(mygroupController.addMember)
  .get(mygroupController.getMember);

// /message/<id> endpoint
router.get('/message/:id', mygroupController.message);

// /message endpoint (không có <id>)
router.get('/message', mygroupController.message);

module.exports = router;
