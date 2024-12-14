
const express = require('express')
const app = express()
const port = 3000

//Prueba, despues se elimina
let animales = [{
  id: 1,
  nombre: "ambar",
  sexo: "hembra",
  especie: "gato",
  edad: 5,
  raza: "mestizo",
  refugio_id: undefined
}, {
  id: 2,
  nombre: "pepo",
  sexo: "macho",
  especie: "gato",
  edad: 4,
  raza: "mestizo",
  refugio_id: undefined

}]

app.get('/', (req, res) => {
  res.send('Adopciones')
})

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Para mostrar todos los animales 
app.get('/api/v1/animales', (req,res) => {
  res.json(animales)
})

//Para buscar un animal en especifico
app.get('/api/v1/animales/:id', (req,res) => {
  const animal = animales.find((Element) => Element.id == req.params.id)
  
  if (animal === undefined) {
    res.sendStatus(404)
    return
  }

  res.json(animal)
})

//Para crear un animal
app.post('/api/v1/animales', (req,res) => {
  const animal = {
    id: animales.length +1,
    nombre: req.body.nombre,
    sexo: req.body.sexo,
    especie : req.body.especie,
    edad: req.body.edad,
    raza: req.body.raza,
    refugio_id: req.body.refugio_id
  }
  animales.push(animal)
  res.status(201).send(animal)
})

//Para eliminar un animal
app.delete('/api/v1/animales/:id', (req,res) => {
  const animal = animales.find((Element) => Element.id == req.params.id)
  if (animal === undefined) {
    res.sendStatus(404)
    return
  }

  animales = animales.filter((Element) => Element.id != req.params.id)
  res.send(animal)
})

//Para actualizar/editar un animal
app.put('/api/v1/animales/:id', (req,res) => {
  let animal_index = animales.findIndex((Element) => Element.id == req.params.id)
  if (animal_index === -1) {
    res.sendStatus(404)
    return
  }

  animales[animal_index].nombre = req.body.nombre ?? animales[animal_index].nombre
  animales[animal_index].sexo = req.params.sexo ?? animales[animal_index].sexo
  animales[animal_index].especie = req.body.especie ?? animales[animal_index].especie
  animales[animal_index].edad = req.body.edad ?? animales[animal_index].edad
  animales[animal_index].raza = req.body.raza ?? animales[animal_index].raza
  animales[animal_index].refugio_id = req.body.refugio_id ?? animales[animal_index].refugio_id

  res.send(animales[animal_index])

})

//Prueba, despues se elimina
let adoptantes = [{
  id: 1,
  nombre: "silvina",
  apellido: "vilchez",
  edad: 22,
  direccion: "ggfnfngf",
  mail: "trhrthtrhtr",
  telefono: 123456
}, {
  id: 2,
  nombre: "daiana",
  apellido: "bfbfg",
  edad: 90,
  direccion: "fbfgbfgnf",
  mail: "dbfgbfb",
  telefono: 98765

}]

//Para mostrar todos los adoptantes 
app.get('/api/v1/adoptantes', (req,res) => {
  res.json(adoptantes)
})

//Para buscar un adoptante en especifico
app.get('/api/v1/adoptantes/:id', (req,res) => {
  const adoptante = adoptantes.find((Element) => Element.id == req.params.id)
  
  if (adoptante === undefined) {
    res.sendStatus(404)
    return
  }

  res.json(adoptante)
})

//Para crear un adoptante
app.post('/api/v1/adoptantes', (req,res) => {
  const adoptante = {
    id: animales.length +1,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad : req.body.edad,
    direccion: req.body.direccion,
    mail: req.body.mail,
    telefono: req.body.telefono
  }
  adoptantes.push(adoptante)
  res.status(201).send(adoptante)
})

//Para eliminar un adoptante
app.delete('/api/v1/adoptantes/:id', (req,res) => {
  const adoptante = adoptantes.find((Element) => Element.id == req.params.id)
  if (adoptante === undefined) {
    res.sendStatus(404)
    return
  }

  adoptantes = adoptantes.filter((Element) => Element.id != req.params.id)
  res.send(adoptante)
})

//Para actualizar/editar un adoptante
app.put('/api/v1/adoptantes/:id', (req,res) => {
  let adoptante_index = adoptantes.findIndex((Element) => Element.id == req.params.id)
  if (adoptante_index === -1) {
    res.sendStatus(404)
    return
  }

  adoptantes[adoptante_index].nombre = req.body.nombre ?? adoptantes[adoptante_index].nombre
  adoptantes[adoptante_index].apellido = req.body.apellido ?? adoptantes[adoptante_index].apellido
  adoptantes[adoptante_index].edad = req.body.edad ?? adoptantes[adoptante_index].edad
  adoptantes[adoptante_index].direccion = req.body.direccion ?? adoptantes[adoptante_index].direccion
  adoptantes[adoptante_index].mail = req.body.mail ?? adoptantes[adoptante_index].mail
  adoptantes[adoptante_index].telefono = req.body.telefono ?? adoptantes[adoptante_index].telefono

  res.send(adoptantes[adoptante_index])

})



//Prueba, despues se elimina
let refugios_transitos = [{
  id: 1,
  nombre: "refugio dfbdbd",
  direccion: "ggfnfngf",
  capacidad_maxima: 7,
  telefono: 123456,
  tipo: "refugio",
  mail: "trhrthtrhtr"
}, {
  id: 2,
  nombre: "silvinaV",
  direccion: "ggfnfngf",
  capacidad_maxima: 1,
  telefono: 123456,
  tipo: "transito",
  mail: "trhrthtrhtr"
}]

//Para mostrar todos los refugios_transitos 
app.get('/api/v1/refugios_transitos', (req,res) => {
  res.json(refugios_transitos)
})

//Para buscar un refugio_transito en especifico
app.get('/api/v1/refugios_transitos/:id', (req,res) => {
  const refugio_transito = refugios_transitos.find((Element) => Element.id == req.params.id)
  
  if (refugio_transito === undefined) {
    res.sendStatus(404)
    return
  }

  res.json(refugio_transito)
})

//Para crear un refugio_transito
app.post('/api/v1/refugios_transitos', (req,res) => {
  const refugio_transito = {
    id: refugios_transitos.length +1,
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    capacidad_maxima: req.body.capacidad_maxima,
    telefono: req.body.telefono,
    tipo: req.params.tipo,
    mail: req.body.mail

  }
  refugios_transitos.push(refugio_transito)
  res.status(201).send(refugio_transito)
})

//Para eliminar un refugio_transito
app.delete('/api/v1/refugios_transitos/:id', (req,res) => {
  const refugio_transito = refugios_transitos.find((Element) => Element.id == req.params.id)
  if (refugio_transito === undefined) {
    res.sendStatus(404)
    return
  }

  refugios_transitos = refugios_transitos.filter((Element) => Element.id != req.params.id)
  res.send(refugio_transito)
})

//Para actualizar/editar un refugio_transito
app.put('/api/v1/refugios_transitos/:id', (req,res) => {
  let refugio_transito_index = refugios_transitos.findIndex((Element) => Element.id == req.params.id)
  if (refugio_transito_index === -1) {
    res.sendStatus(404)
    return
  }

  refugios_transitos[refugio_transito_index].nombre = req.body.nombre ?? refugios_transitos[refugio_transito_index].nombre
  refugios_transitos[refugio_transito_index].direccion = req.body.direccion ?? refugios_transitos[refugio_transito_index].direccion
  refugios_transitos[refugio_transito_index].capacidad_maxima = req.body.capacidad_maxima ?? refugios_transitos[refugio_transito_index].capacidad_maxima
  refugios_transitos[refugio_transito_index].telefono = req.body.telefono ?? refugios_transitos[refugio_transito_index].telefono
  refugios_transitos[refugio_transito_index].tipo = req.body.tipo ?? refugios_transitos[refugio_transito_index].tipo
  refugios_transitos[refugio_transito_index].mail = req.body.mail ?? refugios_transitos[refugio_transito_index].mail

  res.send(refugios_transitos[refugio_transito_index])

})



