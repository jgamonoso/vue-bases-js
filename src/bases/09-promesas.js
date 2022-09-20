
// console.log('Inicio')


// new Promise( (resolve, reject) => {
//     console.log('cuerpo de la promesa')
//     reject('Promesa resuelta')
// })
// .then( console.log)
// .catch( console.log)

// console.log('Fin')




import {getHeroeById, getHeroesByOwner} from './bases/08-im-exp'


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id)

            if (heroe) {
                resolve(heroe)
            } else {
                reject('El heroe no existe')
            }

        }, 1000);

    });
}

getHeroeByIdAsync(2)
.then( heroe => console.log(`El heroe es: ${heroe.name}`) )
.catch( console.log)