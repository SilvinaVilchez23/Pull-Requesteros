// backend/routes/pre_adop.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Para mostrar todos los formularios de pre-adopción
router.get('/', async (req, res) => {
  const formularios = await prisma.preadop.findMany();
  res.json(formularios);
});

// Para buscar un formulario de pre-adopción en específico
router.get('/:id', async (req, res) => {
  const formulario = await prisma.preadop.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (formulario === null) {
    res.sendStatus(404);
    return;
  }

  res.json(formulario);
});

// Para crear un formulario de pre-adopción
router.post('/', async (req, res) => {
  const { email, date, telefono, mascota, pregunta } = req.body;

  try {
    const formu_pre = await prisma.preadop.create({
      data: { email, date, telefono, mascota, pregunta },
    });

    res.status(201).send(formu_pre);
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  }
});

// Para eliminar un formulario de pre-adopción
router.delete('/:id', async (req, res) => {
  const formulario = await prisma.preadop.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (formulario === null) {
    res.sendStatus(404);
    return;
  }

  await prisma.preadop.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.send(formulario);
});

// Para actualizar/editar un formulario de pre-adopción
router.put('/:id', async (req, res) => {
  let formulario = await prisma.preadop.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (formulario === null) {
    res.sendStatus(404);
    return;
  }

  formulario = await prisma.preadop.update({
    where: {
      id: formulario.id,
    },
    data: {
      email: req.body.email,
      date: req.body.date,
      telefono: req.body.telefono,
      mascota: req.body.mascota,
      pregunta: req.body.pregunta,
    },
  });

  fetch('http://localhost:3000/api/v1/formu_pre', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosFormulario)
  })

  res.send(formulario);
});

module.exports = router; // Exporta el router correctamente
