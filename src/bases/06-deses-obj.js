

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Dinero'
}

const {age, name, codeName, power= 'No tiene poder'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)


const createHero = (person) => {

    const {name, age, codeName,power} = person

    return {
        id: 12312314,
        name: name,
        age: age,
        codeName: codeName,
        power: power || '0'
    }
}
console.log(createHero( person ))

const createHero2 = ({name, age, codeName, power}) => {

    return {
        id: 12312314,
        name,
        age,
        codeName,
        power
    }
}
console.log(createHero2( person ))

const createHero3 = ({name, age:edad, codeName, power}) => ({
        id: 12312314,
        name,
        edad,
        codeName,
        power: power || 'No tiene poder'
})

console.log(createHero3( person ))