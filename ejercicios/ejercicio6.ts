//Ejercicio 6-Ciclo for y Arreglos
const estudiantes = ['Eduardo', 'Maria', 'Juan', 'Ana', 'Miguel']
const notas = [70, 85, 90, 75, 80]
//Saludos personalizados
for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i];
    if (nombre.endsWith('a')) {
        console.log(`Bienvenida, ${nombre}`);
    } else {
        console.log(`Bienvenido, ${nombre}`);
    }
}
//Calcular promedio
let suma = 0
for (let i = 0; i < notas.length; i++) {
    suma += notas[i]
}
const promedio = suma / notas.length
console.log('El promedio del grupo es: ${promedio}')