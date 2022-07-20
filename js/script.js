//Calcular interes de un monto
let monto = parseFloat(prompt('¡Bienvenido/a! \nIngrese el monto que desea calcular'));
let opcionCuotas = prompt('Seleccione en cuantas cuotas lo quiere abonar: \n1 - 1 cuota sin interés \n2 - 2 y 3 cuotas con 10% de interés \n3 - 6 cuotas con 18% de interés \n4 - 9 cuotas con 24% de interés \n5 - 12 cuotas con 5% de interés \n0 - SALIR ')

while (opcionCuotas != '0') {
    switch (opcionCuotas) {
        case '1':
            alert('El monto a pagar es $' + monto);
            break;
        case '2':
            alert('El monto a pagar es $' + (suma = parseFloat(monto) + parseFloat(monto * 10 / 100)));
            break;
        case '3':
            alert('El monto a pagar es $' + (suma = parseFloat(monto) + parseFloat(monto * 18 / 100)));
            break;
        case '4':
            alert('El monto a pagar es $' + (suma = parseFloat(monto) + parseFloat(monto * 24 / 100)));
            break;
        case '5':
            alert('El monto a pagar es $' + (suma = parseFloat(monto) + parseFloat(monto * 5 / 100)));
            break;

        default:
            alert('Opción incorrecta');
            break;
    }
    monto = parseFloat(prompt('¡Bienvenido/a! \nIngrese el monto que desea calcular'));
    opcionCuotas = prompt('Seleccione en cuantas cuotas lo quiere abonar: \n1 - 1 cuota sin interés \n2 - 2 y 3 cuotas con 10% de interés \n3 - 6 cuotas con 18% de interés \n4 - 9 cuotas con 24% de interés \n5 - 12 cuotas con 5% de interés \n0 - SALIR ')
}

alert('Esperamos que le haya sido util, que tenga buen dia!')