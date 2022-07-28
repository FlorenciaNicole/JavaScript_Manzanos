//Desafio Primera Preentrega
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

variedades.unshift({
    id: 'Manzanilla',
    precio: '200'
})
console.log(variedades)

console.log(carrito.includes('Hierbas'))
console.log(carrito.includes('Manzanilla'))

const oferta = variedades.filter((variedad) => variedad.precio < 300);
console.log(oferta);

const premium = variedades.filter((variedad) => variedad.precio >= 300);
console.log(premium);

const precioDescuento = variedades.map((variedad) => {return{ id: variedad.id, precio: variedad.precio*.90}})

console.log(precioDescuento);

//No se porque no los suma, sino que los concatena

const precioTotal = variedades.reduce((ac,variedad)=>{return ac+=variedad.precio},0);

console.log(precioTotal);

let keyword =prompt('Ingresa el sabor del Té')
const saborEncontrado = variedades.filter((variedad)=>variedad.id.includes(keyword));
console.log(saborEncontrado)


