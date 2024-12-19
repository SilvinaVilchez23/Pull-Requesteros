// backend/routes/adopte.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Para mostrar todos los adoptantes 
router.get('/', async (req,res) => {
    const adoptantes = await prisma.adoptante.findMany()
    res.json(adoptantes)})
  
  //Para buscar un adoptante en especifico
  router.get('/:id', async (req,res) => {
    const adoptante = await prisma.adoptante.findUnique({
      where: {
        id:parseInt(req.params.id)
      }, 
      include: {
        animal_adoptados:true
      }
    })
    
    if (adoptante === null) {
      res.sendStatus(404)
      return
    }
  
    res.json(adoptante)
  })
  
  
  //Para crear un adoptante
  router.post('/', async (req,res) => {
    const adoptante = await prisma.adoptante.create({
      data: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono
  
      }
    })
    res.status(201).send(adoptante)
  
  })
  
  
  
  //Para eliminar un adoptante
  router.delete('/:id', async (req,res) => {
    const adoptante = await prisma.adoptante.findUnique({
      where: {
        id:parseInt(req.params.id)
      }
    })
  
    if (adoptante === null) {
      res.sendStatus(404)
      return
    }
  
    await prisma.adoptante.delete({
      where: { 
        id: parseInt(req.params.id)
      }
    })
  
    res.send(adoptante)
  })
  
  //Para actualizar/editar un adoptante
  router.put('/:id', async (req,res) => {
    let adoptante = await prisma.adoptante.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
  
    if (adoptante === null) {
      res.sendStatus(404)
      return
    }
  
    adoptante = await prisma.adoptante.update({
      where: {
        id: adoptante.id
      }, 
      data: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono
      }
    })
  
    res.send(adoptante)
  
  })
  
  module.exports = router;  // Exporta el router correctamente