import express from "express";
import { apiRouter } from "./routes/apiRouter.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
