const usuario = prompt("Tu nombre de usuario");
const contrasenia = prompt("Tu contraseña");

const plantas = [
  {
    codigo: "1",
    nombre: "Rosa China",
    precio: 1800,
  },
  {
    codigo: "2",
    nombre: "Palmeras",
    precio: 5300,
  },
  {
    codigo: "3",
    nombre: "Heliconia",
    precio: 3600,
  },
  {
    codigo: "4",
    nombre: "Strelitzia",
    precio: 2800,
  },
];

function mostrarCuotas() {
  console.log("Nuestras plantas tienen:");
  for (let i = 1; i <= 6; i++) console.log(i + " Cuotas sin interés");
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
    let codigo = prompt(
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
