//Ejercicio8-Metodos de Arreglo(map,filter,sort)
const listaProductos = [
{nombre: 'Zapatos', precio: 100 },
{nombre:'Camisa', precio: 80 },
{nombre:'Pantalon',precio: 120 },
{nombre: 'Corbata', precio: 50 },
]
// Precio con Iva(12%)
const productosConIVA = listaProductos.map(p => ({
    ...p,
    precioConIVA: +(p.precio * 1.12).toFixed(2)
})) 
console.log('Con IVA:', productosConIVA)

//Filtar productos >= 100
const productosFiltradosPorIVA = productosConIVA.filter(p => p.precioConIVA >= 100)
console.log('Filtrados:', productosFiltradosPorIVA)

//ordenar por precio con IVA
const productosOrdenadosPorIVA = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA)
console.log('Ordenar:', productosOrdenadosPorIVA)