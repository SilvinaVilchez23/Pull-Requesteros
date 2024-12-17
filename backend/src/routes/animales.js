// backend/routes/animales.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ruta para obtener todos los animales
router.get('/', async (req, res) => {
    const animales = await prisma.animales.findMany();
    res.json(animales);
});

// Ruta para obtener un animal específico
router.get('/:id', async (req, res) => {
    const animal = await prisma.animales.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });

    if (!animal) {
        return res.status(404).send('Animal no encontrado');
    }
    res.json(animal);
});

// Ruta para crear un nuevo animal
router.post('/', async (req, res) => {
    const { nombre, sexo, especie, edad, raza } = req.body;
    const animal = await prisma.animales.create({
        data: { nombre, sexo, especie, edad, raza },
    });

    res.status(201).json(animal);
});

// Ruta para eliminar un animal
router.delete('/:id', async (req, res) => {
    const animal = await prisma.animales.findUnique({
        where: { id: parseInt(req.params.id) },
    });

    if (!animal) {
        return res.status(404).send('Animal no encontrado');
    }

    await prisma.animales.delete({
        where: { id: parseInt(req.params.id) },
    });

    res.json(animal);
});

// Ruta para actualizar un animal
router.put('/:id', async (req, res) => {
    const { nombre, sexo, especie, edad, raza } = req.body;
    const animal = await prisma.animales.update({
        where: { id: parseInt(req.params.id) },
        data: { nombre, sexo, especie, edad, raza },
    });

    res.json(animal);
});

module.exports = router;
