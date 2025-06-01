import express from "express"
import {router as v1Router } from "./routes/v1/index"
const app = express();
app.use(express.json());
app.use("/v1",v1Router)
app.listen(3000,()=>{
    console.log("started serve on port 3000")
})