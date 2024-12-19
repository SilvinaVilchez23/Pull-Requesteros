const express = require('express');
const path = require('path');
const app = express();

// Definir el puerto del servidor
const port = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para la página del mapa
app.get('/animales', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'animales.html'));
});

// Ruta para la página de mascotas
app.get('/adopte', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'adopte.html'));
});

// Ruta para el formulario de encontraste
app.get('/refugios', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'refugio.html'));
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
