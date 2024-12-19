// backend/routes/adopte.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Para mostrar todos los adoptantes 
router.get('/', async (req,res) => {
    const adoptantes = await prisma.animal_en_refugio_transito.findMany()
    res.json(adoptantes)})
  
  //Para buscar un adoptante en especifico
  router.get('/:id', async (req,res) => {
    const animal = await prisma.animal_en_refugio_transito.findUnique({
      where: {
        id:parseInt(req.params.id)
      }, 
      include: {
        animal_adoptados:true
      }
    })
    
    if (animal === null) {
      res.sendStatus(404)
      return
    }
  
    res.json(adoptante)
  })
  
  
  //Para crear un adoptante
  router.post('/', async (req,res) => {
    const animal = await prisma.animal_en_refugio_transito.create({
      data: {
        refugio_id: req.body.refugio_id,
        animal_id: req.body.animal_id,
      }
    })
    res.status(201).send(animal)
  
  })
  
  
  
  //Para eliminar un adoptante
  router.delete('/:id', async (req,res) => {
    const animal = await prisma.animal_en_refugio_transito.findUnique({
      where: {
        id:parseInt(req.params.id)
      }
    })
  
    if (animal === null) {
      res.sendStatus(404)
      return
    }
  
    await prisma.animal_en_refugio_transito.delete({
      where: { 
        id: parseInt(req.params.id)
      }
    })
  
    res.send(animal)
  })

  
  module.exports = router;  // Exporta el router correctamente