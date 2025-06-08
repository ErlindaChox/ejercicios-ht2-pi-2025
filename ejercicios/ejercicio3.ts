//ejercicio 3-Condicionales if,else if, else
import readline from 'readline-sync'
// solicitar fecha de nacimiento
const fechaNacimientoTexto = readline.question('Ingrese su fecha de nacimiento (YYYY-MM-DD): ')
const anioNacimiento = new Date(fechaNacimientoTexto).getFullYear()
const anioActual = new Date().getFullYear()
const edad = anioActual - anioNacimiento
//Evaluar grupo de edad
if (edad < 12) {
    console.log('Eres un niñ0.')
} else if (edad >= 12 && edad < 17) {
    console.log('Eres un adolescente')

} else if (edad >= 18 && edad < 64) {
    console.log('Eres un adulto')
}else{
    console.log('Eres un adulto mayor')
}

// solocitar nota del examen
const notaTexto = readline.question('Ingrese la nota del examen (0-1000): ')
const nota = Number(notaTexto)
//Evaluar resultado del examen
if (nota >= 90) {
    console.log('Califiacio: A')
}   else if (nota >= 80) {
    console.log('Calificacion: B')
}else if (nota >=70) {
    console.log('Calificacion: C')
}else if (nota >= 60) {
    console.log('Calificacion: D')
}else if (nota >= 50)
 console.log('Calificacion: E')
 else {}





