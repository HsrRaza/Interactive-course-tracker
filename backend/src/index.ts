import express from "express";
import {pool} from "./config/db.js";
import dotenv from "dotenv";
import  type { Response , Request } from "express";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import courseRoutes from "./routes/course.routes.js";

app.use("/api", courseRoutes);

app.get("/", async (req:Request, res:Response) => {
  const result = await pool.query("SELECT NOW()");

  res.json({
    message: "Backend connected to PostgreSQL Docker",
    time: result.rows[0],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});