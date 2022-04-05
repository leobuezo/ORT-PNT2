console.log(`
/* ------------------------------------------------------ */
/*                    STRING METHODS                      */
/* ------------------------------------------------------ */
`)

let mensaje = 'Hola Muñdo'
console.log(mensaje, mensaje.length)
let mensajeUpperCase = mensaje.toUpperCase()
console.log(mensaje, mensajeUpperCase)
let mensajeLowerCase = mensaje.toLowerCase()
console.log(mensaje, mensajeLowerCase)
console.log(mensaje.indexOf('ñ'))
console.log(mensaje.includes('uñ'))
console.log('[' + mensaje.charAt(5) + ']')

let mensajeArray = mensaje.split('')
console.log(mensajeArray)

console.log(mensaje.slice(1, 3))

console.log(`

/* ------------------------------------------------------ */
/*                     ARRAY METHODS                      */
/* ------------------------------------------------------ */
`)

let array = ['Hola', 'Mundo']
console.log(array, array.length)
console.log(array.indexOf('Mundo'))
console.log(array.includes('Mundo'))

let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros.push(6))
console.log(numeros)
console.log(numeros.pop())
console.log(numeros)
console.log(numeros.shift())
console.log(numeros)
console.log(numeros.unshift(7))
console.log(numeros)
console.log(numeros.splice(2,1,222))
console.log(numeros)

console.log(`

/* ------------------------------------------------------ */
/*                          MAP                           */
/* ------------------------------------------------------ */
`)

numeros = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numeros)

const numerosX2 = numeros.map( num => num * 2)
console.log(numerosX2)

// usando el spread operator ...
const numerosClon = [... numeros]
console.log(numerosClon)

console.log(`

/* ------------------------------------------------------ */
/*                        FILTER                          */
/* ------------------------------------------------------ */
`)

//numeros = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numeros)

const numerosClonConFilter = numeros.filter( num => true)
console.log(numerosClonConFilter)

const numerosPares = numeros.filter( num => num % 2 == 0)
console.log(numerosPares)

const numerosImpares = numeros.filter( num => num % 2)
console.log(numerosImpares)

console.log(`

/* ------------------------------------------------------ */
/*                      Chaining                          */
/* ------------------------------------------------------ */
`)

let texto = 'Con chaining evitamos crear variables auxiliares reduciendo el código.'
let textoInvertido = texto.split('').reverse().join('')
console.log(textoInvertido)

console.log(new Date())
//let fechaHora = new Date()
let fechaHoraFormateada = new Date().toLocaleDateString()
console.log(fechaHoraFormateada)



