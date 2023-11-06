import express from "express";
import libraryRoutes from "./routes/libraryRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api", libraryRoutes); //library routes

app.listen(process.env.PORT, function () {
  console.log(`server started in port: ${process.env.PORT}`);
});
