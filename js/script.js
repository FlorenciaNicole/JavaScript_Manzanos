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


    Swal.fire({
        title: '¡Buen día! Ingresa tu nombre para acceder al sitio',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `Bienvenido/a ${result.value.login}, ya podes empezar a comprar tus infuciones favoritas!`,
                imageUrl: './img/taza.jpg'
            })
        }
    })



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

        Toastify({
            text: "Producto agregado al carrito",
            className: "agregar",
            duration: 1500,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #198754, #000000)",
            }
        }).showToast();

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

        Toastify({
            text: "Producto eliminado",
            className: "eliminar",
            duration: 1500,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #0dcaf0, #000000)",
            }
        }).showToast();
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

const btnComprar = document.querySelector('#comprar-carrito');
btnComprar.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has comprado todos los productos del carrito',
        showConfirmButton: false,
        timer: 2500
    })
    localStorage.clear();
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