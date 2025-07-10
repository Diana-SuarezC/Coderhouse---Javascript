// Almacenamiento de usuarios y productos
const usuarios = {};
const productos = [];

// Función para validar ID de usuario
function usuarioExiste(user){
    for (var i=0; i<usuarios.length; i++){
        if (usuarios.userID === user){
            return true;
        }
    }
    return false;
}

// Función para obtener producto por ID
function obtenerProductoPorId(id) {
    for (var i=0; i<productos.length(); i++){
        if (productos.userID === id){
            return productos[id];
        }
    }
    return false;
}

//Funcion para validar producto

function existeProducto(producto){
    for (var i=0; i<productos.length; i++){
        if (productos[i].nombre === producto){
            return true;
        }
    }
    return false;
}


// Solicitud de ID de usuario
let userID = prompt("Ingrese su ID de usuario:");

if (!usuarioExiste(userID)) {
  let crear = prompt("ID no existe. ¿Desea crear un nuevo usuario? (1=si/ 2=no)");
  if (crear === "1") {
    do {
      userID = prompt("Ingrese nuevo ID de usuario:");
      if (usuarioExiste(userID)) {
        alert("Este ID ya existe. Intente con otro.");
      }
    } while (usuarioExiste(userID));

    const nombre = prompt("ingrese su nombre");
    const correo = prompt("Ingrese su correo electrónico:");
    let contraseña;

    do {
      contraseña = prompt("Ingrese una contraseña (mínimo 8 caracteres):");
      if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
      }
    } while (contraseña.length < 8);

    usuarios[userID] = { correo, contraseña };
    alert("Usuario creado exitosamente.");
  } 
}


 
let opcion = prompt("¿Qué desea hacer?\ 1. Agregar un nuevo producto\ 2. Salir");


switch (opcion) {
    case "1":
        let continuar = true;

        while(continuar = true) {
            let nombreProducto;
            let existe;

            do {
                nombreProducto = prompt("Ingrese el nombre del producto:");
                existe = existeProducto(nombreProducto);
                if (existe) {
                alert("Este producto ya existe. Ingrese otro nombre.");
                }
            } while (existe);
            let  precio = prompt("Ingrese el precio en COP:");
        

            const id = productos.length + 1;
            productos.push({ id, nombre: nombreProducto, precio });
            alert(`Producto "${nombreProducto}" agregado con ID ${id}.`);

            let respuesta = prompt("¿Desea agregar otro producto? (1=si/ 2=no)");
            if (respuesta === "1"){
                continuar = true;
            }
            else{
                continuar = false;
            }

        } 

      case "2":
        alert("Gracias! Hasta luego.");
        break;
  }

  
console.log("Lista actual de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`ID: ${productos[i].id} - Nombre: ${productos[i].nombre} - Precio: ${productos[i].precio} COP`);
}      
        
     
