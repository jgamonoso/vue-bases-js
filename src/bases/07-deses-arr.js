// console.log('Hola mundo')


const characters = ['Goku', 'Vegeta', 'Trunks']

// const g = characters[0]
// const v = characters[1]
// const t = characters[2]

// console.log(g, v, t)

// const [g, v, t] = characters
// console.log(g, v, t)


const [g, v, t, goten = 'No tiene valor'] = characters
console.log(goten)

const returnArray = () => {
    return ['ABC', 123]
}
const [letters, numbers] = returnArray()

console.log(letters, numbers)
console.log(numbers)



const returnArray2 = (arr) => {
    return [arr[0], arr[1]]
}
const [letters2, numbers2] = returnArray2(['XYZ', '987'])

console.log(letters2, numbers2)
console.log(numbers2)


const returnArray3 = ([letter, number]) => {
    return [letter, number]
}
const [letter, number] = returnArray3(['qwerty', '13579'])

console.log(letter, number)
console.log(number)