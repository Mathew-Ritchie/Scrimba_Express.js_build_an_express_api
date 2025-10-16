import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;
const app = express();

app.get("/api", (req, res) => {
  res.json(startups);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
