const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

router.get('/', thoughtController.getAllThoughts);
router.post('/', thoughtController.createThought);


module.exports = router;
