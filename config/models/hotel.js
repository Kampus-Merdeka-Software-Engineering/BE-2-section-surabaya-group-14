const prisma = require('../config/prisma');

const getAllHotel = async () => {
  const findManyHotel = await prisma.hotel.findMany();
  return findManyHotel;
};

const getOneHotel = async (idHotel) => {
  const findOneHotel = await prisma.hotel.findUnique({
    where: {
      id: parseInt(idHotel),
    },
  });
  return findOneHotel;
};

const createNewHotel = async (body) => {
  const createOneHotel = await prisma.hotel.create({
    data: body,
  });
  return createOneHotel;
};

const updateHotel = async (body, idHotel) => {
  const updateHotelData = {
    /* data destructuring body
    id: idHotel,
    created_at: created_at,
    body.hotel_name || !body.address || !body.description || !body.facilities
    */
    ...body,
  };
  const updateOneHotel = await prisma.hotel.update({
    where: {
      id: parseInt(idHotel),
    },
    data: updateHotelData,
  });
  return updateOneHotel;
};

const deleteHotel = async (idHotel) => {
  const deleteOneHotel = await prisma.hotel.delete({
    where: {
      id: parseInt(idHotel),
    },
  });
  return deleteOneHotel;
};

module.exports = {
  getAllHotel,
  getOneHotel,
  createNewHotel,
  updateHotel,
  deleteHotel,
};
