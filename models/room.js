const prisma = require('../config/prisma');

const getAllRoom = async () => {
  const findManyRoom = await prisma.room.findMany();
  return findManyRoom;
};

const getOneRoom = async (idRoom) => {
  const findOneRoom = await prisma.room.findUnique({
    where: {
      id: parseInt(idRoom),
    },
  });
  return findOneRoom;
};

const createNewRoom = async (body) => {
  const createOneRoom = await prisma.room.create({
    data: body,
  });
  return createOneRoom;
};

const updateRoom = async (body, idRoom) => {
  const updateRoomData = {
    ...body,
  };

  const updateOneRoom = await prisma.room.update({
    where: {
      id: parseInt(idRoom),
    },
    data: updateRoomData,
  });
  return updateOneRoom;
};

const deleteRoom = async (idRoom) => {
  const deleteOneRoom = await prisma.room.delete({
    where: {
      id: parseInt(idRoom),
    },
  });
  return deleteOneRoom;
};

module.exports = {
  getAllRoom,
  getOneRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};