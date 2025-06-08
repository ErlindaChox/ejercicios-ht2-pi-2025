//ejercicio 5-Ciclos while y do...while
import readline from 'readline-sync'
//Temporizador con while
const segundosTexto = readline.question('¿Cuantos segundos desea temporizar? ')
let segundos = Number (segundosTexto)
while (segundos > 0) {
    console.log('Faltan ${segundos} segundos')
    segundos--
}
//Mostrar  fin del conteo
console.log('El tiempo finalizo')
//Menu interactivo con do..while
let opcion: string
do {
    console.log('\n---Menu---')
    console.log('1. Saludar')
    console.log('2. Mostrar hora actual')
    console.log('3. Salir')
    opcion = readline.question('Seleccione una opcion: ')

    if (opcion === '1;'){
        console.log('¡Hola! ¿Como estas?')
    }else if (opcion === '2') {
        console.log('La hora actual es: ${new Date().toLocaleTimeSctring()}')
    }
}while (opcion !== '3') {
}
    

    


