const express = require('express');
const router = express.Router(); // Usa el router, no app
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Para mostrar todos los animales
router.get('/', async (req, res) => {
  const animales = await prisma.animal.findMany();
  res.json(animales);
});

// Para buscar un animal específico
router.get('/:id', async (req, res) => {
  const animal = await prisma.animal.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      animal_en_refugio_transito: true,
      animal_adoptados: true,
    },
  });

  if (animal === null) {
    res.sendStatus(404);
    return;
  }

  res.json(animal);
});

// Para crear un animal
router.post('/', async (req, res) => {
  const animal = await prisma.animal.create({
    data: {
      nombre: req.body.nombre,
      especie: req.body.especie,
      tipo: req.body.tipo,
      edad: req.body.edad,
      raza: req.body.raza,
    },
  });

  res.status(201).send(animal);
});

// Para eliminar un animal
router.delete('/:id', async (req, res) => {
  const animal = await prisma.animal.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (animal === null) {
    res.sendStatus(404);
    return;
  }

  await prisma.animal.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.send(animal);
});

// Para actualizar/editar un animal
router.put('/:id', async (req, res) => {
  let animal = await prisma.animal.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (animal === null) {
    res.sendStatus(404);
    return;
  }

  animal = await prisma.animal.update({
    where: {
      id: animal.id,
    },
    data: {
      nombre: req.body.nombre,
      especie: req.body.especie,
      tipo: req.body.tipo,
      edad: req.body.edad,
      raza: req.body.raza,
    },
  });

  res.send(animal);
});

module.exports = router; // Exporta el router correctamente
