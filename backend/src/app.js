const express = require('express');
const path = require('path');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../../frontend')));

// Rutas de la API
app.use('/api/v1/animales', require('./routes/animales'));
app.use('/api/v1/registrar-animal', require('./routes/refugios'));
app.use('/api/v1/adopte', require('./routes/adopte'));

// Rutas para los archivos HTML de frontend
app.get('/animales', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/animales.html'));
});

app.get('/registrar-animal', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/perros.html'));
});

app.get('/adopte', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/adopte.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

app.get('/mas/preguntas_fre.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/mas/preguntas_fre.html'));
});

app.get('/mas/formu_pre.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/mas/formu_pre.html'));
});

app.get('/mas/sobre_nosotros.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/mas/sobre_nosotros.html'));
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});









