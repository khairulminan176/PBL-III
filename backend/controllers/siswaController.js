import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllSiswa = async (req, res) => {
  // res.send("Get All Siswa");
  try {
    const reponse = await prisma.datasiswa.findMany();
    res.status(200).json(reponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSiswaById = async (req, res) => {
  try {
    const reponse = await prisma.datasiswa.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(reponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const creatSiswa = async (req, res) => {
  try {
    const { nama, umur } = req.body;
    const reponse = await prisma.datasiswa.create({
      data: {
        nama: nama,
        umur: umur,
      },
    });
    res.status(200).json(reponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const putSiswa = async (req, res) => {
  try {
    const { nama, umur } = req.body;
    const reponse = await prisma.datasiswa.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama: nama,
        umur: umur,
      },
    });
    res.status(200).json(reponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSiswa = async (req, res) => {
  try {
    const { nama, umur } = req.body;
    const reponse = await prisma.datasiswa.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(reponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
