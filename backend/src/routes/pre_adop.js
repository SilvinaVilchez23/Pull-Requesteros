const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router(); // Usa el router, no app

// Ruta para procesar el formulario de pre-adopción
router.post('/procesar-formulario', async (req, res) => {
  // Recoger los datos del formulario enviados desde req.body
  const { email, date, telefono, mascota } = req.body;

  console.log('Formulario recibido:', req.body);  // Verifica que los datos llegan correctamente

  // Intentar verificar si el correo electrónico o teléfono ya están registrados
  try {
    // Verificar si el correo electrónico ya está registrado
    const existingEmail = await prisma.preadop.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return res.status(400).send('<h1>El correo electrónico ya está registrado</h1>');
    }

    // Verificar si el teléfono ya está registrado
    const existingPhone = await prisma.preadop.findUnique({
      where: {
        telefono: telefono,
      },
    });

    if (existingPhone) {
      return res.status(400).send('<h1>El teléfono ya está registrado</h1>');
    }

    // Intentamos guardar los datos en la base de datos si no hay duplicados
    const formu_pre = await prisma.preadop.create({
      data: {
        email,       // Email recibido desde el formulario
        date,        // Fecha de nacimiento recibida
        telefono,    // Teléfono recibido
        mascota,     // Tipo de mascota recibido
      },
    });

    console.log('Formulario guardado en la base de datos:', formu_pre);

    // Responder con éxito
    res.send('<h1>Formulario enviado con éxito</h1>');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('<h1>Error al guardar los datos</h1>');
  }
});

module.exports = router; // Exporta el router correctamente
