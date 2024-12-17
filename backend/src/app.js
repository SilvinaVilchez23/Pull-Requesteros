<<<<<<< HEAD
const {PrismaClient} = require('@prisma/client')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
=======
const express = require('express');
const path = require('path');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
>>>>>>> main

// Importar las rutas de API
const animalesRoutes = require('./routes/animales');
const refugiosRoutes = require('./routes/refugios');
const adopteRoutes = require('./routes/adopte');

<<<<<<< HEAD
app.use(cors())

=======
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Asegúrate de tener CORS habilitado si el frontend está en otro dominio o puerto

// Middleware para servir archivos estáticos desde la carpeta "public" dentro de frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Servir archivos estáticos (archivos HTML y otros recursos)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Rutas de la API
app.use('/api/v1/animales', animalesRoutes);
app.use('/api/v1/refugios', refugiosRoutes);
app.use('/api/v1/adopte', adopteRoutes);

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
>>>>>>> main
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
<<<<<<< HEAD
  console.log(`Example app listening on port ${port}`)
})

//Para mostrar todos los animales 
app.get('/api/v1/animales', async (req,res) => {
  const animales = await prisma.animal.findMany()
  res.json(animales)

})

//Para buscar un animal en especifico
app.get('/api/v1/animales/:id', async (req,res) => {
  const animal = await prisma.animal.findUnique({
    where: {
      id:parseInt(req.params.id)
    },
    include: {
      animal_en_refugio_transito:true,
      animal_adoptados:true

    }
  })
  
  if (animal === null) {
    res.sendStatus(404)
    return
  }

  res.json(animal)
})

//Para crear un animal
app.post('/api/v1/animales', async (req,res) => {
  const animal = await prisma.animal.create({
    data: {
      nombre: req.body.nombre,
      especie: req.body.especie,
      tipo: req.body.tipo,
      edad: req.body.edad,
      raza: req.body.raza,
    }
  })

  res.status(201).send(animal)

})

//Para eliminar un animal
app.delete('/api/v1/animales/:id', async (req,res) => {
  const animal = await prisma.animal.findUnique({
    where: {
      id:parseInt(req.params.id)
    }
  })

  if (animal === null) {
    res.sendStatus(404)
    return
  }

  await prisma.animal.delete({
    where: { 
      id: parseInt(req.params.id)
    }
  })

  res.send(animal)
})

//Para actualizar/editar un animal
app.put('/api/v1/animales/:id', async (req,res) => {
  let animal = await prisma.animal.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })

  if (animal === null) {
    res.sendStatus(404)
    return
  }

  animal = await prisma.animal.update({
    where: {
      id: animal.id
    }, 
    data: {
      nombre: req.body.nombre,
      especie: req.body.especie,
      tipo: req.body.tipo,
      edad: req.body.edad,
      raza: req.body.raza
    }
  })


  res.send(animal)

})

//----------------------------------------------------------------------------------------------------------

//Para mostrar todos los adoptantes 
app.get('/api/v1/adoptantes', async (req,res) => {
  const adoptantes = await prisma.adoptante.findMany()
  res.json(adoptantes)})

//Para buscar un adoptante en especifico
app.get('/api/v1/adoptantes/:id', async (req,res) => {
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
app.post('/api/v1/adoptantes', async (req,res) => {
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
=======
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



>>>>>>> main






