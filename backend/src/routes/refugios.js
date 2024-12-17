const express = require('express');
const router = express.Router(); // Usa el router, no app
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Para mostrar todos los refugios_transitos 
router.get('/api/v1/refugios_transitos', async (req,res) => {
    const refugios_transitos = await prisma.refugio_transito.findMany()
    res.json(refugios_transitos)
  
  })
  
  //Para buscar un refugio_transito en especifico
  router.get('/api/v1/refugios_transitos/:id', async (req,res) => {
    const refugio_transito = await prisma.refugio_transito.findUnique({
      where: {
        id:parseInt(req.params.id)
      },
      include: {
        animal_en_refugio_transito:true
      }
    })
    
    if (refugio_transito === null) {
      res.sendStatus(404)
      return
    }
  
    res.json(refugio_transito)
  })
  
  //Para crear un refugio_transito
  router.post('/api/v1/refugios_transitos', async (req,res) => {
    const refugio_transito = await prisma.refugio_transito.create({
      data: {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        capacidad_maxima: req.body.capacidad_maxima,
        telefono: req.body.telefono,
        tipo: req.body.tipo
      }
    })
    res.status(201).send(refugio_transito)
  
  })
  
  //Para eliminar un refugio_transito
  router.delete('/api/v1/refugios_transitos/:id', async (req,res) => {
    const refugio_transito = await prisma.refugio_transito.findUnique({
      where: {
        id:parseInt(req.params.id)
      }
    })
  
    if (refugio_transito === null) {
      res.sendStatus(404)
      return
    }
  
    await prisma.refugio_transito.delete({
      where: { 
        id: parseInt(req.params.id)
      }
    })
  
    res.send(refugio_transito)
  })
  
  //Para actualizar/editar un refugio_transito
  router.put('/api/v1/refugios_transitos/:id', async (req,res) => {
    let refugio_transito = await prisma.refugio_transito.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
  
    if (refugio_transito === null) {
      res.sendStatus(404)
      return
    }
  
    refugio_transito = await prisma.refugio_transito.update({
      where: {
        id: refugio_transito.id
      }, 
      data: {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        capacidad_maxima: req.body.capacidad_maxima,
        telefono: req.body.telefono,
        tipo: req.body.tipo
      }
    })
  
    res.send(refugio_transito)
  
  })
  module.exports = router; // Exporta el router correctamente