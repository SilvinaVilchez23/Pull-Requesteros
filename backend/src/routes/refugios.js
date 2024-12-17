// backend/routes/refugios.js
const express = require('express');
const router = express.Router();

// Ejemplo de ruta para obtener todos los refugios
router.get('/', async (req, res) => {
  res.json([{ nombre: "Refugio 1", ubicacion: "Ubicación 1" }]);
});

module.exports = router;  // Asegúrate de exportar el router correctamente
