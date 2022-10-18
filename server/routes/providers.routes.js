import { Router } from "express";

import {
  createProvider,
  updateProviders,
  getProvider,
  getProviders,
  deleteProvider,
} from "../controllers/Providers.controllers.js";

const router = Router();

router.post("/Providers", createProvider);

router.put("/Providers/:id", updateProviders);

router.get("/Providers", getProviders);

router.get("/Providers/:id", getProvider);

router.delete("/Providers/:id", deleteProvider);

export default router;
