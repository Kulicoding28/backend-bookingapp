import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// memanggil endpoint api

// buat fungsi register di model auth import kesini
router.post("/register", register);
router.post("/login", login);

export default router;

// next import auth ke index
