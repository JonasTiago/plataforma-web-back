import express from "express";
import dotenv from "dotenv";
// import userRoutes from "./src/routes/userRoutes.js";
import cors from "cors";
import { mongoClient } from "./src/data/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
mongoClient.db("data");

// app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
