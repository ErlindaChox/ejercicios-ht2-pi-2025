//ejercicio7-Funciones y Procedimientos
import readline from 'readline-sync'
//funcion
function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2
}

// Procedimiento
function mostrarSaludo(nombre: string): void {
 console.log(`Hola, ${nombre}. Bienvenido al sistema de geometria`)
}
//programa principal
const base = Number(readline.question('Ingrese la base del triangulo:'))
const altura = Number(readline.question('Ingrese la altura del triangulo:'))
const nombre = readline.question('Ingrese su nombre')

mostrarSaludo(nombre)
const area = calcularAreaTriangulo(base, altura)
console.log('El area del triangulo es: ${area}')
