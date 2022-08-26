/*  let carrito = []; */

document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [{
            id: 1,
            nombre: 'Manzanilla',
            precio: 250,
            imagen: './img/manzanillaSaquito.jpg'
        },
        {
            id: 2,
            nombre: 'Té Verde',
            precio: 250,
            imagen: './img/teverdeSaquito.jpg'
        },
        {
            id: 3,
            nombre: 'Frutos Rojos',
            precio: 350,
            imagen: './img/frutosrojosSaquito.jpg'
        },
        {
            id: 4,
            nombre: 'Limón y Jengibre',
            precio: 350,
            imagen: './img/limonSaquito.jpg'
        },
        {
            id: 5,
            nombre: 'Variety Pack',
            precio: 400,
            imagen: './img/variedadSaquito.jpg'
        },
        {
            id: 6,
            nombre: 'Menta Peperina',
            precio: 350,
            imagen: './img/mentaSaquito.jpg'
        }
    ]


    /* document.querySelector('h1').textContent = 'Venta de infusiones con beneficios para la salud'

    let nuevoDiv = document.createElement('div');
    nuevoDiv.innerHTML = '<p> TIP: Tomarse un té o una infusión después de comer es una buena costumbre que muchos tienen. Sin embargo, beber tu té en ayunas puede permitirte, según algunos estudios, aprovechar mejor sus propiedades. </p>';
    document.body.append(nuevoDiv);

    let entrada = prompt('Ingresa tu nombre')
    let tarjeta = document.createElement('Div')
    tarjeta.className = 'card'
    tarjeta.innerHTML = `<h2> Bienvenido/a, ${entrada}</h2>
    <img src="./img/taza.jpg" height="500" width="300">`

    nuevoDiv.prepend(tarjeta) */

    /* let radioSaquito = document.getElementById('saquitos');
    let radioHebras = document.getElementById('hebras');
    const btnConfirmar = document.getElementById('btnComprar')

    function cambiarImagen(source) {
        document.getElementById('Manzanilla').src = source;
    }

    radioSaquito.addEventListener('click', () => {
        cambiarImagen('./img/manzanillaSaquito.jpg');
    })
    radioHebras.addEventListener('click', () => {
        cambiarImagen('./img/manzanillaHebras.jpg');
    })

    btnComprar.onclick = () => {
        alert(('Se agregará al carrito Té de Manzanilla'));

    }; */

    //local storage json

    /* class Carrito {
        constructor(clave) {
            this.clave = clave || "productos";
            this.productos = this.obtener();
        }

        agregar(producto) {
            if (!this.existe(producto.id)) {
                this.productos.push(producto);
                this.guardar();
            }
        }

        quitar(id) {
            const indice = this.productos.findIndex(p => p.id === id);
            if (indice != -1) {
                this.productos.splice(indice, 1);
                this.guardar();
            }
        }

        guardar() {
            localStorage.setItem(this.clave, JSON.stringify(this.productos));
        }

        obtener() {
            const productosCodificados = localStorage.getItem(this.clave);
            return JSON.parse(productosCodificados) || [];
        }

        existe(id) {
            return this.productos.find(producto => producto.id === id);
        }

        obtenerConteo() {
            return this.productos.length;
        }


    } */


    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones


    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa}${info.precio}`;

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-success');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }


    // Evento para añadir un producto al carrito de la compra

    function anyadirProductoAlCarrito(evento) {

        carrito.push(evento.target.getAttribute('marcador'))

        renderizarCarrito();

        guardarCarritoEnLocalStorage();
    }


    function renderizarCarrito() {

        DOMcarrito.textContent = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {

                return itemId === item ? total += 1 : total;
            }, 0);

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-info', 'mx-2');
            miBoton.textContent = 'Eliminar';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });

        DOMtotal.textContent = calcularTotal();
    }


    // Evento para borrar un elemento del carrito

    function borrarItemCarrito(evento) {

        const id = evento.target.dataset.item;

        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        renderizarCarrito();

        guardarCarritoEnLocalStorage();

    }


    //Calcula el precio total 

    function calcularTotal() {

        return carrito.reduce((total, item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }


    // Vacia el carrito 

    function vaciarCarrito() {

        carrito = [];

        renderizarCarrito();

        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {

        if (miLocalStorage.getItem('carrito') !== null) {

            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }


    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});

//SweetAlert

const btn = document.querySelector('#boton-vaciar')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Tu carrito esta vacío',
        icon: 'warning',
        confirmButtonColor: '#387D39'
    })
})

//No se como llamar al boton 'COMPRAR'

miNodoBoton.onclick = () => {
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 1500,
    }).showToast();
}

//FETCH


var contenido = document.querySelector('#contenido')

        function traer() {
            fetch('tabla.json')
                .then(res => res.json())
                .then(datos => {
                    console.log(datos)
                    tabla(datos)
                })
        }

        function tabla(datos) {
         console.log(datos)
            contenido.innerHTML = ''
            for(let valor of datos){
                console.log(valor.nombre)
                contenido.innerHTML += `
                
                <tr>
                    <th scope="row">
                    <td>${ valor.nombre }</td>
                    <td>${ valor.estado ? "Tenemos stock" : "Sin stock" }</td>
                </tr>
                
                `
            }
        }