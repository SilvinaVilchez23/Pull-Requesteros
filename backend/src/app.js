const express = require('express');
const path = require('path');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Importar las rutas de API
const animalesRoutes = require('./routes/animales');
const refugiosRoutes = require('./routes/refugios');
const adopteRoutes = require('./routes/adopte');
const preAdopRoutes = require('./routes/pre_adop');  // Importamos la ruta de pre_adop
const refugioAnimalRoutes = require('./routes/animales_refugio');
const animalAdoptadosRoutes = require('./routes/animal_adoptados');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Asegúrate de tener CORS habilitado si el frontend está en otro dominio o puerto
app.use(express.urlencoded({ extended: true })); // Para poder procesar formularios HTML

// Middleware para servir archivos estáticos desde la carpeta "public" dentro de frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Servir archivos estáticos (archivos HTML y otros recursos)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Rutas de la API
app.use('/api/v1/animales', animalesRoutes);
app.use('/api/v1/refugios', refugiosRoutes);
app.use('/api/v1/adopte', adopteRoutes);

// Rutas para el formulario de pre-adopción
app.use('/pre-adopcion', preAdopRoutes);  // Usamos la ruta de pre_adop
//rutas de las relaciones
app.use('/api/v1/animales_refugio', refugioAnimalRoutes);
app.use('/api/v1/animales_adoptante', animalAdoptadosRoutes);

// Rutas para los archivos HTML de frontend
app.get('/animales', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/animales.html'));
});

app.get('/refugios', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/refugios.html'));
});

app.get('/adopte', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/adopte.html'));
});

// Ruta por defecto (inicio) - puede ser opcional si tienes un index.html
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