//ejercicio 4-Estructura switch
import readline from 'readline-sync'
//Paso 1: Solicitar numero de dia
const numeroDiaTexto = readline.question('Ingrese un numero del 1 al 7: ')
const numeroDia = Number(numeroDiaTexto)
//Paso 2: Evaluar dia de la semana
switch (numeroDia) {
    case 1:
        console.log('lunes')
        break
        case 2:
            console.log('martes')
            break
        case 3:
            console.log('miercoles')
            break
        case 4:
            console.log('jueves')
            break
        case 5:
            console.log('viernes')
            break
        case 6:
            console.log('Sabado')
            break        
        case 7:
            console.log('Domingo')
            break
        default:
            console.log('Numero invalido')
}       
//Paso 3: Solicitar numero de mes
const color = readline.question('Ingrese un color del semaforo (verde, amarillo, rojo): ').toLowerCase()
//Paso 4: Evaluar color del semaforo
switch (color) {
    case 'verde':
        console.log('Puede avanzar')
        break
    case 'amarillo':
        console.log('Pase con precaucion')
        break
    case 'rojo':
        console.log('Detenerse')
        break
    default:
        console.log('Color no valido')    

}
