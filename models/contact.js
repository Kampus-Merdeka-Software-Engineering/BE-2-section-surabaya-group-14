const prisma = require('../config/prisma');
const getAllContact = async () => {
  const findManyContact = await prisma.contact.findMany();
  return findManyContact;
};

const getOneContact = async (idContact) => {
  const findOneContact = await prisma.contact.findUnique({
    where: {
      id: parseInt(idContact),
    },
  });
  return findOneContact;
};

const createNewContact = async (body) => {
  const createOneContact = await prisma.contact.create({
    data: body,
  });
  return createOneContact;
};

const updateContact = async (body, idContact) => {
  const updateContactData = {
    ...body,
  };

  const updateOneContact = await prisma.contact.update({
    where: {
      id: parseInt(idContact),
    },
    data: updateContactData,
  });
  return updateOneContact;
};

const deleteContact = async (idContact) => {
  const deleteOneContact = await prisma.contact.delete({
    where: {
      id: parseInt(idContact),
    },
  });
  return deleteOneContact;
};

module.exports = {
  getAllContact,
  getOneContact,
  createNewContact,
  updateContact,
  deleteContact,
};