class Planta {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const usuario = prompt("Tu nombre de usuario");
const contrasenia = prompt("Tu contraseña");

const plantas = [
  new Planta("1", "Rosa China", 1800),
  new Planta("2", "Palmeras", 5300),
  new Planta("3", "Heliconia", 3600),
  new Planta("4", "Strelitzia", 2800),
];

function filtrarPorPrecio(listaPlantas, precioMax) {
  return listaPlantas.filter((planta) => planta.precio <= precioMax);
}

function renderizarProductos(listaProds) {
  console.table(listaProds);
}

// Validación de usuario y contraseña
if (usuario === "juan" && contrasenia === "1234") {
  alert("Bienvenido Juan!!");
  let precioUsuario = parseFloat(
    prompt("Ingresa el precio máximo que puedes abonar (0-salir)")
  );

  while (precioUsuario !== 0) {
    if (isNaN(precioUsuario) || precioUsuario < 0) {
      alert("Por favor, ingrese un número válido 😲");
    } else {
      const prodsFiltrados = filtrarPorPrecio(plantas, precioUsuario);
      renderizarProductos(prodsFiltrados);
    }
    // Preguntamos nuevamente
    precioUsuario = parseFloat(
      prompt("Ingresa el precio máximo que puedes abonar (0-salir)")
    );
  }

  console.log("Gracias por visitarnos, te esperamos pronto");
} else {
  alert("Usuario y/o contraseña incorrectos");
}
