import express from "express";
import {
  createField,
  deleteField,
  getFields,
  getField,
  updateField,
  countByCity,
  countByType,
} from "../controllers/field.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createField);

// setelah membuat post cek di insomnia atau postman

// UPDATE
router.put("/:id", verifyAdmin, updateField);

// DELETE
router.delete("/:id", verifyAdmin, deleteField);

// GET
router.get("/find/:id", getField);

// GET ALL
// buat error handling pakai middleware index next
router.get("/", getFields);
// const failed = true;

// // buat folder utils folder dan function error dan tangkap di next ()
// if (failed) return next(createError(401, "You are not auth!"));
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;

// next buat folder models dan filenya lanjut
// buat schema berdasrkan dokumentasi mongoose

// disini selesai buat controllers
