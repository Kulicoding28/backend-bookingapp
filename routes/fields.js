import express from "express";
import Field from "../models/Field.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newField = new Field(req.body);

  try {
    const savedField = await newField.save();
    res.status(200).json(savedField);
  } catch (err) {
    res.status(500).json(err);
  }
});

// setelah membuat post cek di insomnia atau postman

// UPDATE

// DELETE

// GET

// GET ALL

export default router;

// next buat folder models dan filenya lanjut
// buat schema berdasrkan dokumentasi mongoose
