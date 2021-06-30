import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4000;

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => console.log("Connection to MongoDB Successful")
);

app.get("/", (req, res) => res.send("Nostalgia API is running"));
app.use("/posts", postRoutes);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
