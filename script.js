function limpiar() {
let opcion = confirm("Si confirma, borrará el contenido de su carrito");

if (opcion) {
    cantvelas = 0;
    total = 0;
    console.clear();
    console.log("\n\n El carrito quedó vacio! Ya podés volves a empezar :) \n\n");
} else {
    console.log("\n\n El carrito no se reinició, podes seguir con tu compra :) \n\n");
}
}

function mostrar() {
console.log(
    "\n\n Tu carrito lleva en total " +
    cantvelas +
    " velas. \n Tenes " +
    limon +
    " de limon; " +
    vainilla +
    " de vainilla, y " +
    cookies +
    " de cookies.\n El total gastado hasta el momento es de $" +
    total + "\n\n");
}

let menu,
menu2,
total = 0,
cantvelas = 0,
limon = 0,
cookies = 0,
vainilla = 0;

do {
menu = Number(prompt(
    "- Ingrese el numero, segun lo que desea hacer: \n \n \
        1) Comprar. \n \
        2) Mostrar carrito. \n \
        3) Borrar carrito. \n \
        0) Salir del programa"
    ));

switch (menu) {
    case 1:
    do {
        menu2 = Number(
        prompt(
            "- Elija la vela que quiere comprar:\n\n\
                1) Vainilla ($700) \n \
                2) Limon ($850) \n \
                3) Cookies (900) \n \
                0) Nada mas por ahora"
        )
        );
        switch (menu2) {
        case 1:
            total = total + 700;
            cantvelas++;
            vainilla++;
            console.log("\n Añadiste una vela de Vainilla al carrito :) \n");
            break;
        case 2:
            total = total + 850;
            cantvelas++;
            limon++;
            console.log("\n Añadiste una vela de Limon al carrito :) \n");
            break;
        case 3:
            total = total + 900;
            cantvelas++;
            cookies++;
            console.log("\n Añadiste una vela de Cookies al carrito :) \n");
            break;
        case 0:
            break;
        default:
            console.log("\n Por favor, ingresá un numero válido \n");
            break;
        }
    } while (menu2 != 0);
    break;

    case 2:
        mostrar();
    break;
    case 3:
        limpiar();
    break;
    case 0:
    break;
    default:
        console.log("\n Por favor, ingresá un numero válido \n");
    break;
  }
} while (menu != 0);

console.log(
    "\n\n\n Gracias por tu compra! \n Tu carrito quedó con un total " +
    cantvelas +
    " velas. \n Vas a llevar " +
    limon +
    " de limon; " +
    vainilla +
    " de vainilla, y " +
    cookies +
    " de cookies.\n El total gastado es de $" +
    total + 
    ".\n Cuando nuestro programador sepa mas, vas a ser redirigido a ingresar los datos de tu tarjeta");