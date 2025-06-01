import express from "express"
import {router as v1Router } from "./routes/v1/index"
export const app = express();
app.use(express.json());
app.use("/v1",v1Router)