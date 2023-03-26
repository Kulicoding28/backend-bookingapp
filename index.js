import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import fieldsRoute from "./routes/fields.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
// 1.yarn add dotenv
dotenv.config();

// 2.untuk connecting ke db library copas mongoose
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

// 3. buat throw error
mongoose.connection.on("disconected", () => {
  console.log("mongoDB disconected!");
});

// 6.middleware

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/fields", fieldsRoute);
app.use("/api/rooms", roomsRoute);

// 0.tahapan tambahkan di packed.json "type" : "module"
app.listen(8800, () => {
  connect();
  console.log("conected to backend...!");
});

// 4. buat routes
