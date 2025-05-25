function obtenerProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: "Laptop" });
      } else {
        reject("ID inválido");
      }
    }, 1000);
  });
}

async function mostrarProducto() {
  try {
    const producto = await obtenerProducto(1);
    console.log(`Producto encontrado: ${producto.nombre}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarProducto();