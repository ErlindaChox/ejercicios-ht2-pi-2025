//Operdores de Expresiones
import readline from 'readline-sync'
//Solicitar precio y descuento
const precioTexto = readline.question('Ingrese el precio del producto: ')
const descuentoTexto = readline.question('Ingrese el porcentaje de descuento: ')
//Convertir a numero y calccular precio final
const precio = Number(precioTexto)
const descuento = Number(descuentoTexto)
const total = precio - (precio * descuento / 100)
//imprimir resultado del calculo
console.log('El precio final con descuento es: Q${total}')

//Paso Solicitar estatura
const estaturaTexto = readline.question('Ingrese su estatura en centimetros: ')
const estatura = Number(estaturaTexto)
//Verificar si puede subirse al juego
if(estatura >= 120 && estatura <= 200) {
 console.log('puede subirse al juego.')
} else {
    console.log('No puede subirse al juego.')
}



