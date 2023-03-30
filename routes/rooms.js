import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// CREATE
// field id di create room berdasrkan room di controller prams
router.post("/:fieldId", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:fieldId", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

export default router;
