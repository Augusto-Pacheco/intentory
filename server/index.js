import express from "express";
import cors from "cors";
import { PORT } from "./port.js";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/providers.routes.js";
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes);
app.listen(PORT);
console.log("server is runnig");
