import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log(rows);
    res.json(rows);
});

export default router;