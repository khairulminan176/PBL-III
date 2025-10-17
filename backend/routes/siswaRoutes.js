import express from "express";
const router = express.Router();
import { creatSiswa, putSiswa, deleteSiswa, getAllSiswa, getSiswaById } from "../controllers/siswaController.js";

router.get("/siswa", getAllSiswa);
router.get("/siswa/:id", getSiswaById);
router.post("/siswa",creatSiswa)
router.put("/siswa/:id", putSiswa)
router.delete("/siswa/:id",deleteSiswa)
export default router;

