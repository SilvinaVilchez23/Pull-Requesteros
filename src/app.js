const {PrismaClient} = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000

const prisma = new PrismaClient()


app.get('/', (req, res) => {
  res.send('Adopciones')
})

app.use(express.json())

app.listen(port, () => {
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
      sexo: req.body.sexo,
      especie: req.body.especie,
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
      sexo: req.body.sexo,
      especie: req.body.especie,
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



//Para eliminar un adoptante
app.delete('/api/v1/adoptantes/:id', async (req,res) => {
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
app.put('/api/v1/adoptantes/:id', async (req,res) => {
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

//--------------------------------------------------------------------------------------------------------


//Para mostrar todos los refugios_transitos 
app.get('/api/v1/refugios_transitos', async (req,res) => {
  const refugios_transitos = await prisma.refugio_transito.findMany()
  res.json(refugios_transitos)

})

//Para buscar un refugio_transito en especifico
app.get('/api/v1/refugios_transitos/:id', async (req,res) => {
  const refugio_transito = await prisma.refugio_transito.findUnique({
    where: {
      id:parseInt(req.params.id)
    }
  })
  
  if (refugio_transito === null) {
    res.sendStatus(404)
    return
  }

  res.json(refugio_transito)
})

//Para crear un refugio_transito
app.post('/api/v1/refugios_transitos', async (req,res) => {
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
app.delete('/api/v1/refugios_transitos/:id', async (req,res) => {
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
app.put('/api/v1/refugios_transitos/:id', async (req,res) => {
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



