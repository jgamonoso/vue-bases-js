

// function saludar( name) {
//     return `Hola ${name}`
// }

// const saludar = function ( name) {
//     return `Hola ${name}`
// }

// const saludar = (name) => {
//     return `Hola ${name}`
// }

// const saludar = (name) => `Hola ${name}`

// const saludar = name => `Hola ${name}`

const saludar = (name = 'Peter') => `Hola ${name}`


const nombre = 'Tony'

console.log(saludar(nombre))


// const getUser = () => {
//     return {
//         uid: '1234',
//         username: 'Tony001'
//     }
// }
const getUser = () => ({
    uid: '1234',
    username: 'Tony001'
})

console.log(getUser())


const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
]
console.log('------------')
const existe1 = heroes.some( (heroe) => heroe.id === 1);
const existe2 = heroes.some( (heroe) => heroe.id === 3);
const existe3 = heroes.find( (heroe) => heroe.id === 1);
const existe4 = heroes.find( (heroe) => heroe.id === 3);
const { name } = heroes.find( (heroe) => heroe.id === 1);

console.log(existe1)
console.log(existe2)
console.log(existe3)
console.log(existe4)
console.log(name)