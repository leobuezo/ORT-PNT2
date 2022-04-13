import moment from 'moment'
import { compareAsc, format } from 'date-fns'

let now = moment().format('LLLL')
console.log(now)
let a = 5
let b = 6
const suma = (a, b) => a + b

console.log(`La suma de ${a} y ${b} es igual a ${suma(a, b)}.`)

let nowDate = format(new Date(), 'yyyy-mm-dd')
console.log(nowDate)