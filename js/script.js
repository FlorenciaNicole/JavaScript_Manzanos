//Desafio Primera Preentrega
const carrito = [];
const variedades = [{
        id: 'Manzanilla',
        precio: 250
    },
    {
        id: 'Té Verde',
        precio: 250
    },
    {
        id: 'Frutos Rojos',
        precio: 350
    },
    {
        id: 'Limon y Jengibre',
        precio: 350
    },
    {
        id: 'Variety Pack',
        precio: 400
    },
    {
        id: 'Menta Peperina',
        precio: 350
    }
]


document.querySelector('h1').textContent = 'Venta de infusiones con beneficios para la salud'

let nuevoDiv = document.createElement('div');
nuevoDiv.innerHTML = '<p> TIP: Tomarse un té o una infusión después de comer es una buena costumbre que muchos tienen. Sin embargo, beber tu té en ayunas puede permitirte, según algunos estudios, aprovechar mejor sus propiedades. </p>';
document.body.append(nuevoDiv);

let entrada = prompt('Ingresa tu nombre')
let tarjeta = document.createElement('Div')
tarjeta.className = 'card'
tarjeta.innerHTML = `<h2> Bienvenido/a, ${entrada}</h2>
<img src="./img/taza.jpg" height="500" width="300">`

nuevoDiv.prepend(tarjeta)






