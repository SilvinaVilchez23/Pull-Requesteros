// backend/routes/adopte.js
const express = require('express');
const router = express.Router();

// Ejemplo de ruta para registrar una adopción
router.post('/', async (req, res) => {
  const { idAnimal, idAdoptante, fechaAdopcion } = req.body;
  res.json({ success: true, idAnimal, idAdoptante, fechaAdopcion });
});

module.exports = router;  // Asegúrate de exportar el router correctamente
