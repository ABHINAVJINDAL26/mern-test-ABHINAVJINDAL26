/*
 * server.js — application entry point
 * Initialises Express, connects to MongoDB, and mounts route handlers
 */
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import initializeDatabase from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";

/* load environment variables before anything else */
dotenv.config();

/* connect to the database */
initializeDatabase();

const app = express();

/* global middleware */
app.use(cors());
app.use(express.json());

/* health-check endpoint */
app.get("/", (_req, res) => {
  res.status(200).json({ status: "ok", service: "CourseHub API" });
});

/* route mounts */
app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);

/* start listening */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`CourseHub API → http://localhost:${PORT}`);
});
