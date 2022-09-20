

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555312,
        lat: 14.3312,
        lng: 34.4321
    }
}

const persona2 = {...persona}

persona2.nombre = 'Peter'

console.log(persona)

console.log(persona2)


