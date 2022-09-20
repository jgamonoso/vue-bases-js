
// import { owners } from './data/heroes';

// const [dc, marvel] = owners
// console.log(dc)
// console.log(marvel)


import superHeroes from '../data/heroes'
// console.log(superHeroes)

export const getHeroeById = (id) => {
    return superHeroes.find( (heroe) => heroe.id === id)
}
// console.log(getHeroeById(1))

export const getHeroesByOwner = (owner) => {
    return superHeroes.filter( (heroe) => heroe.owner === owner)
}
// console.log(getHeroesByOwner('DC'))


// -----------------------



// import {getHeroeById, getHeroesByOwner} from './bases/08-im-exp'

// console.log(getHeroeById(1))

// console.log(getHeroesByOwner('DC'))
