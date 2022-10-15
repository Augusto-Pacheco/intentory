import express from "express";
import { PORT } from "./port.js";

import indexRoutes from "./routes/index.routes.js";
const app = express();

app.use(indexRoutes)
app.listen(PORT)
console.log("server is runnig");