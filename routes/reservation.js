const express = require('express');

const ReservationController = require('../controller/reservation');

const router = express.Router();

// Create - Post
router.post('/', ReservationController.createNewReservation);

// Read - Get
router.get('/', ReservationController.getAllReservation);

// Read - Get 1
router.get('/:idReservation', ReservationController.getOneReservation);

// Update - Patch
router.patch('/:idReservation', ReservationController.updateReservation);

// Delete - Delete
router.delete('/:idReservation', ReservationController.deleteReservation);

module.exports = router;
