import { pool } from "../config/db.js";

export const createProvider = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await pool.query("INSERT INTO Provider(name) VALUES (?)", [
      name,
    ]);
    console.log(result);
    res.json({
      id: result.insertId,
      name,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProvider = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM Provider WHERE ProviderId = ?",
      [req.params.id]
    );

    if (result.length == 0) {
      return res
        .status(404)
        .json({ message: "Proveedor no encontrado o no existe" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProviders = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Provider");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProviders = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE Provider SET ? WHERE ProviderId = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProvider = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM Provider WHERE ProviderId = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Proveedor no encontrado o no existe" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
