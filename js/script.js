//Desafio Arrays
const carrito = ['Hierbas', 'Frutos rojos'];
const variedades = [{
        id: 'Frutilla',
        precio: 250
    },
    {
        id: 'Hierbas',
        precio: 250
    },
    {
        id: 'Rosa Mosqueta',
        precio: 250
    },
    {
        id: 'Limon y Jengibre',
        precio: 250
    },
    {
        id: 'Frutos rojos',
        precio: 300
    },
    {
        id: 'Frutos azules',
        precio: 300
    }
]
console.log(variedades)

variedades.unshift({id: 'Manzanilla', precio: '200'})
console.log(variedades)

console.log(carrito.includes('Hierbas'))
console.log(carrito.includes('Manzanilla'))


