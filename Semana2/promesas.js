function verificarLogin(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarLogin("admin")
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
