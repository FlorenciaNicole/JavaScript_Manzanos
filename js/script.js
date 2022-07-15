let nombre = prompt('Ingresa tu nombre para acceder a la información');

alert('Bienvenido/a ' + nombre, )

let nombreHijo = prompt('Ingresa el nombre de tu hijo/a');

let opcion = prompt('Cuantos meses tiene ' + nombreHijo + '? Elegí una opción: \n1- Recien nacido. \n2 - 2 meses. \n3 - 3 meses. \n4 - 4 meses. \n5 - 5 meses. \n6 - 6 meses. \n7 - 12 meses. \n8 - 15 meses. \n9 - 18 meses. \n10 - 24 meses. \nPresioná X para finalizar.')

while (opcion != 'X' && opcion != 'x') {

    switch (opcion) {
        case '1':
            alert('Señor/a ' + nombre + ' debe darle la BCG y la Hepatitis B a ' + nombreHijo + '.');
            break;
        case '2':
            alert('Señor/a ' + nombre + ' debe darle la Neumococo Conjugada a ' + nombreHijo + '.');
            break;
        case '3':
            alert('Señor/a ' + nombre + ' debe darle la Meningococo Conjugada Cuadrivalente, 1º dosis a ' + nombreHijo + '.');
            break;
        case '4':
            alert('Señor/a ' + nombre + ' debe darle la Rotavirusa ' + nombreHijo + '.');
            break;
        case '5':
            alert('Señor/a ' + nombre + ' debe darle la Meningococo Conjugada Cuadrivalente, 2º dosis a ' + nombreHijo + '.');
            break;
        case '6':
            alert('Señor/a ' + nombre + ' debe darle la Polio IPV a ' + nombreHijo + '.');
            break;
        case '7':
            alert('Señor/a ' + nombre + ' debe darle la Hepatitis A y Triple Viral a ' + nombreHijo + '.');
            break;
        case '8':
            alert('Señor/a ' + nombre + ' debe darle la vacuna de la Varicela a ' + nombreHijo + '.');
            break;
        case '9':
            alert('Señor/a ' + nombre + ' debe darle la Cuádruple o Quíntuple Pentavalente Celular, 1º refuerzo y la vacuna de la Gripea ' + nombreHijo + '.');
            break;
        case '10':
            alert('Señor/a ' + nombre + ' debe darle la vacuna de la Gripe a ' + nombreHijo + '.');
            break;

        default:
            alert('La opción ingresada no existe');
            break;
    }
    opcion = prompt('¿Cuantos meses tiene ' + nombreHijo + '? Elegí una opción: \n1- Recien nacido. \n2 -  meses. \n3 - 3 meses. \n4 - 4 meses. \n5 - 5 meses. \n6 - 6 meses. \n7 - 12 meses. \n8 - 15 meses. \n9 - 18 meses. \n10 - 24 meses. \nPresioná X para finalizar.')
}

alert('¡Gracias por su visita!')