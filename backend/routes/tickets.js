const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const ticketController = require('../controllers/ticketController');
const auth = require('../middleware/auth');

router.post(
  '/',
  [
    auth,
    [
      check('type', 'Type is required').not().isEmpty(),
      check('foodType', 'Food type is required').not().isEmpty(),
      check('quantity', 'Quantity is required').not().isEmpty(),
    ],
  ],
  ticketController.createTicket
);

router.get('/', auth, ticketController.getTickets);
router.put('/:id', auth, ticketController.acceptTicket);

module.exports = router;
