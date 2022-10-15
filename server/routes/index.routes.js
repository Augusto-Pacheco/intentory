import { Router } from "express";
import { pool } from "../config/db";

const router = Router();

router.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT 1 + 1 AS result');
    console.log(result);
    res.json("ping");
});

export default router;