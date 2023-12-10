const HotelModel = require('../models/hotel');

const getAllHotel = async (req, res) => {
  try {
    const data = await HotelModel.getAllHotel();

    res.status(200).json({
      message: 'Get All Hotel Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const getOneHotel = async (req, res) => {
  const { idHotel } = req.params;

  try {
    const data = await HotelModel.getOneHotel(idHotel);
    res.status(200).json({
      message: 'Get One Hotel Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewHotel = async (req, res) => {
  const { body } = req;

  if (!body.hotel_name || !body.address || !body.description || !body.facilities) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
    });
  }
  try {
    await HotelModel.createNewHotel(body);
    res.status(201).json({
      message: 'Create New Hotel Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateHotel = async (req, res) => {
  const { idHotel } = req.params;
  const { body } = req;

  if (!body.hotel_name || !body.address || !body.description || !body.facilities) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
    });
  }
  try {
    await HotelModel.updateHotel(body, idHotel);
    res.status(201).json({
      message: 'Update Hotel Successfully',
      data: {
        id: idHotel,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const deleteHotel = async (req, res) => {
  const { idHotel } = req.params;
  try {
    await HotelModel.deleteHotel(idHotel);
    res.status(200).json({
      message: 'Delete Hotel Successfully',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllHotel,
  getOneHotel,
  createNewHotel,
  updateHotel,
  deleteHotel,
};
