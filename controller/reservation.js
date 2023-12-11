const ReservationModel = require('../models/reservation');

const getAllReservation = async (req, res) => {
  try {
    const data = await ReservationModel.getAllReservation();

    res.status(200).json({
      message: 'Get All Reservation Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const getOneReservation = async (req, res) => {
  const { idReservation } = req.params;

  try {
    const data = await ReservationModel.getOneReservation(idReservation);
    res.status(200).json({
      message: 'Get One Reservation Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewReservation = async (req, res) => {
  const { body } = req;

  if (!body.customer_name || !body.customer_description||!body.check_in || !body.check_out) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await ReservationModel.createNewReservation(body);
    res.status(201).json({
      message: 'Create New Reservation Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateReservation = async (req, res) => {
  const { idReservation } = req.params;
  const { body } = req;

  if (!body.customer_name || !body.customer_description||!body.check_in || !body.check_out) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await ReservationModel.updateReservation(body, idReservation);
    res.status(201).json({
      message: 'Update Reservation Successfully',
      data: {
        id: idReservation,
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

const deleteReservation = async (req, res) => {
  const { idReservation } = req.params;
  try {
    await ReservationModel.deleteReservation(idReservation);
    res.status(200).json({
      message: 'Delete About Successfully',
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
  getAllReservation,
  getOneReservation,
  createNewReservation,
  updateReservation,
  deleteReservation,
};
