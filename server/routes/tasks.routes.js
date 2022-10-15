import { Router } from "express";

import {
  createTask,
  updateTasks,
  getTask,
  getTasks,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTasks);

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

export default router;
