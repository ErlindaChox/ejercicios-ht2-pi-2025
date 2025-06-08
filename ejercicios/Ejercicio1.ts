import readline from 'readline-sync'
// solicitar entrada de datos
const nombre = readline.question('¿Cual es tu nombre?')
const edadTexto = readline.question('¿Cuantos años tienes?')
const activoTeXto = readline.question('¿Estas activo? (true/false: ')
//Declarar y convertir datos
const edad = Number(edadTexto)
const activo = activoTeXto.toLowerCase() === 'true' 

//Imprimir mensaje personalizado
console.log('Hola, me llamo ${Erlinda}, tengo${25} años y estoy activa: ${activo}')

//imprimir tipos de datos usando typeof
console.log('Tipo de nombre: ${typeof nombre}' )
console.log('Tipo de edad: ${typeof edad}' )
console.log('Tipo de activo: ${typeof activo}')

//Declarar variables especiales y mostrar su tipo
let ValorNulo = null
let valorNoAsignado
console.log('Tipo de valorNulo: ${typeof valorNulo}')
console.log('Tipo de valorNoAsignado: ${typeof valorNoAsignado}')


 