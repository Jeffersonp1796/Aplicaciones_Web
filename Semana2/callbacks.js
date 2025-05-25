function procesarUsuario(usuario, callback) {
  console.log(`Procesando usuario: ${usuario}`);
  callback(usuario);
}

function mostrarBienvenida(nombre) {
  console.log(`¡Bienvenido, ${nombre}!`);
}

procesarUsuario("Carlos", mostrarBienvenida);