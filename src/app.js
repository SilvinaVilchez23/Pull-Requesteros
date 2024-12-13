
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

