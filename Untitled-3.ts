//ejercicio 7-Funciones y Procedimientod
import readline from 'readline-sync'
//Funcion
function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2;
}
//Procedimiento
function mostrarSaludo(nombre: string): void {
  console.log(`Hola, ${nombre}. Bienvenido al sistema de geometria`)

}
//Programa principal
const base = Number(readline.question('Ingrese la base del triangulo'))
const altura = Number(readline.question('Ingrese la altura del triangulo: '))
const nombre = readline.question('Ingrese su nombre: ')

mostrarSaludo(nombre)
const area = calcularAreaTriangulo(base, altura)
console.log('El area del triangulo es: ${area}')
npm install readline-syncnpm install readline-sync