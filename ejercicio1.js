//Ejercicio 8-Metodos de Arreglos(map,filter,sort)
const productos =[
    {nombre: 'Zapatos', precio: 100 },
    {nombre: 'Camisa', precio: 80},
    {nombre: 'Pantalones', precio: 120},
    {nombre: 'Corbata', precio: 50},
]
//Precio con Iva(12%)
const precioConIva = productos.map(p => ({
    ...p,
    precio: p.precio * 1.12
}));
//Filtrar productos >=100
const productosFiltrados = precioConIva.filter(p => p,precioCon Iva >= precioConIva. >=100)
console.log('Filtrados:', productosFiltrados)
//ordenar por precio
const productosOrdenados = productosFiltrados.sort((a,b) => a.precio - b.precioConIva)
console.log('Ordenados:', productosOrdenados);