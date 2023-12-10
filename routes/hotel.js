const express = require('express');

const HotelController = require('../controller/hotel');

const router = express.Router();

// Create - Post
router.post('/', HotelController.createNewHotel);

// Read - Get
router.get('/', HotelController.getAllHotel);

// Read - Get 1
router.get('/:idHotel', HotelController.getOneHotel);

// Update - Patch
router.patch('/:idHotel', HotelController.updateHotel);

// Delete - Delete
router.delete('/:idHotel', HotelController.deleteHotel);

module.exports = router;


