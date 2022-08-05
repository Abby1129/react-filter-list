import express from "express";
const app = express();

import cors from "cors";

app.use(cors());
app.listen(5000, () => console.log("API is working!"));
