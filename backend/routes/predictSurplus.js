const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');
const auth = require('../middleware/auth');

router.post('/', auth, predictionController.predictSurplus);

module.exports = router;
