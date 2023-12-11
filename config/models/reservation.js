const prisma = require('../config/prisma');

const getAllReservation = async () => {
  const findManyReservation = await prisma.reservation.findMany();
  return findManyReservation;
};

const getOneReservation = async (idReservation) => {
  const findOneReservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(idReservation),
    },
  });
  return findOneReservation;
};

const createNewReservation = async (body) => {
  const createOneReservation = await prisma.reservation.create({
    data: body,
  });
  return createOneReservation;
};

const updateReservation = async (body, idReservation) => {
  const updateReservationData = {

    ...body,
  };
  const updateOneReservation = await prisma.reservation.update({
    where: {
      id: parseInt(idReservation),
    },
    data: updateReservationData,
  });
  return updateOneReservation;
};

const deleteReservation = async (idReservation) => {
  const deleteOneReservation = await prisma.reservation.delete({
    where: {
      id: parseInt(idReservation),
    },
  });
  return deleteOneReservation;
};

module.exports = {
  getAllReservation,
  getOneReservation,
  createNewReservation,
  updateReservation,
  deleteReservation,
};
