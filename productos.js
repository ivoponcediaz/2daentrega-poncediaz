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

function mostrarCuotas() {
  console.log("Nuestras plantas tienen:");
  for (let i = 1; i <= 6; i++) {
    console.log(i + " Cuotas sin interés");
  }
}

function mostrarPrecio(codigo) {
  const plantaSeleccionada = plantas.find((planta) => planta.codigo === codigo);
  if (plantaSeleccionada) {
    console.log(
      `El precio de las ${plantaSeleccionada.nombre} es de: $${plantaSeleccionada.precio}`
    );
  } else {
    console.warn("Lo que usted pide no está disponible");
  }
}

function consultarPlantas() {
  const respuesta = confirm("¿Quieres saber cuáles son nuestros precios?");
  if (respuesta) {
    const codigo = prompt(
      "Ingrese el código de la planta que desea adquirir (1-4)"
    );
    mostrarPrecio(codigo);
    mostrarCuotas();
  } else {
    console.log("Gracias por visitarnos, te esperamos pronto");
  }
}

if (usuario === "juan" && contrasenia === "1234") {
  alert("Bienvenido Juan!!");
  consultarPlantas();
} else {
  alert("Usuario y/o contraseña incorrectos");
}
