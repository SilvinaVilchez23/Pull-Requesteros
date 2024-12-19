const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Para mostrar todos los animales adoptados
router.get('/', async (req, res) => {
  const animalesAdoptados = await prisma.animal_adoptados.findMany();
  res.json(animalesAdoptados);
});

//Para buscar un animal adoptado en específico
router.get('/:id', async (req, res) => {
  const animalAdoptado = await prisma.animal_adoptados.findUnique({
    where: {
      id: parseInt(req.params.id)
    },
    include: {
      animal: true,
      adoptante: true
    }
  });

  if (animalAdoptado === null) {
    res.sendStatus(404);
    return;
  }

  res.json(animalAdoptado);
});
//Para crear un nuevo animal adoptado
router.post('/', async (req, res) => {
  const nuevoAnimalAdoptado = await prisma.animal_adoptados.create({
    data: {
      animal_id: req.body.animal_id,
      adoptante_id: req.body.adoptante_id
    }
  });

  res.status(201).json(nuevoAnimalAdoptado);
});
//Para actualizar un animal adoptado
router.put('/:id', async (req, res) => {
  const animalAdoptado = await prisma.animal_adoptados.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  });

  if (animalAdoptado === null) {
    res.sendStatus(404);
    return;
  }

  const updatedAnimalAdoptado = await prisma.animal_adoptados.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      animal_id: req.body.animal_id,
      adoptante_id: req.body.adoptante_id,
      fecha_adopcion: req.body.fecha_adopcion
    }
  });

  res.json(updatedAnimalAdoptado);
});

module.exports = router;
