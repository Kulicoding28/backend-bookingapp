import express from "express";
import {
  createField,
  deleteField,
  getAllFields,
  getField,
  updateField,
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
router.get("/:id", getField);

// GET ALL
// buat error handling pakai middleware index next
router.get("/", getAllFields);
// const failed = true;

// // buat folder utils folder dan function error dan tangkap di next ()
// if (failed) return next(createError(401, "You are not auth!"));

export default router;

// next buat folder models dan filenya lanjut
// buat schema berdasrkan dokumentasi mongoose

// disini selesai buat controllers
