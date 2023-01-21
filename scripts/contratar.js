// registrarse
const divRegistrarse = document.querySelector(".divRegistrarse");

const inputEmailRegistrarse = document.querySelector("#inputEmailRegistrarse");

const inputContraRegistrarse = document.querySelector(
  "#inputContraRegistrarse"
);

const inputNombreRegistrarse = document.querySelector(
  "#inputNombreRegistrarse"
);

const inputApellidoRegistrarse = document.querySelector(
  "#inputApellidoRegistrarse"
);

const formRegistrarse = document.querySelector("#formRegistrarse");

const botonRegistrarse = document.querySelector("#seRegistro");

// formulario de asignacion de vehiculos
const inputAutos = document.querySelector("#input-autos");

const inputMotos = document.querySelector("#input-motos");

const inputBicicletas = document.querySelector("#input-bicicletas");

const containerVehiculos = document.querySelector(".container-vehiculos");

const formVehiculos = document.querySelector("#form-vehiculos");

const vehiculosIncorrectos = document.querySelector("#logintVehiculos");

// formulario de metodo de pago
const formPago = document.querySelector("#form-pagar");

const inputNombre = document.querySelector("#input-nombre");

const inputApellido = document.querySelector("#input-apellido");

const inputDni = document.querySelector("#input-dni");

const inputTarjeta = document.querySelector("#input-tarjeta");

const inputSeguridad = document.querySelector("#input-seguridad");

const inputVencimiento = document.querySelector("#input-vencimiento");

const tarjetaIncorrecta = document.querySelector("#logintPagar");

const contenedorPagar = document.querySelector(".container-pagar");

// escribir precios y cantidad de vehiculos
const vehiculosHtml = document.getElementById("cantidadDeVehiculos");

const bienvenida = document.querySelector("#bienvenida");

const tituloPrecios = document.querySelector("#tituloPrecios");

const containerPreciosVehiculos = document.querySelector(
  ".containerPreciosVehiculos"
);

// boton y container pagina default

const botonSimular = document.querySelector("#botonSimular");

const esconderDivBoton = document.querySelector(".divImgPersonasDefault");

const containerCard = document.querySelector("#containerCard");

const botonAsociarse = document.querySelector("#botonAsociarse");

let vehiculoAsociado = [
  {
    tipo: "bici",
    precio: 2000,
    cantidad: 0,
  },
  {
    tipo: "moto",
    precio: 7000,
    cantidad: 0,
  },
  {
    tipo: "auto",
    precio: 10000,
    cantidad: 0,
  },
];

botonRegistrarse.onclick = () => {
  divCerrarSesion.style.display = "flex";
  iniciarSesion.style.display = "none";
  subirAlLs("usuario", inputEmailRegistrarse.value);
  subirAlLs("contrasena", inputContraRegistrarse.value);
  divRegistrarse.style.display = "none";
};

botonSimular.onclick = () => {
  containerVehiculos.style.display = "flex";
  esconderDivBoton.style.display = "none";
};

const subirVehiculosAlLs = () => {
  subirAlLs("autos", inputAutos.value);
  subirAlLs("motos", inputMotos.value);
  subirAlLs("bicicletas", inputBicicletas.value);
};

const escribirEnHtml = () => {
  let precioMensualVehiculos = 0;

  for (let i = 0; i < vehiculoAsociado.length; i++) {
    precioMensualVehiculos =
      precioMensualVehiculos +
      vehiculoAsociado[i].precio * vehiculoAsociado[i].cantidad;
  }

  let texto = `El abono mensual que tenes que abonar es de: ${precioMensualVehiculos}$
  Cantidad de ${vehiculoAsociado[0].tipo}: ${vehiculoAsociado[0].cantidad} a ${
    vehiculoAsociado[0].precio * vehiculoAsociado[0].cantidad
  }$\nCantidad de ${vehiculoAsociado[1].tipo}: ${
    vehiculoAsociado[1].cantidad
  } a ${
    vehiculoAsociado[1].precio * vehiculoAsociado[1].cantidad
  }$\nCantidad de ${vehiculoAsociado[2].tipo}: ${
    vehiculoAsociado[2].cantidad
  } a ${vehiculoAsociado[2].precio * vehiculoAsociado[2].cantidad}$`;

  vehiculosHtml.innerText = texto;
};

formVehiculos.onsubmit = (event) => {
  event.preventDefault();
  if (
    inputAutos.value != "" &&
    inputMotos.value != "" &&
    inputBicicletas.value != ""
  ) {
    subirVehiculosAlLs();
    vehiculoAsociado[0].cantidad = parseInt(obtenerDelLs("bicicletas"));
    vehiculoAsociado[1].cantidad = parseInt(obtenerDelLs("motos"));
    vehiculoAsociado[2].cantidad = parseInt(obtenerDelLs("autos"));
    containerVehiculos.style.display = "none";
    escribirEnHtml();
    containerPreciosVehiculos.style.display = "flex";
    containerCard.style.display = "flex";
  } else {
    if (inputAutos.value === "") {
      inputAutos.style.border = "1px solid red";
    }
    if (inputBicicletas.value === "") {
      inputBicicletas.style.border = "1px solid red";
    }
    if (inputMotos.value === "") {
      inputMotos.style.border = "1px solid red";
    }
    vehiculosIncorrectos.style.display = "flex";
  }
};

botonAsociarse.onclick = () => {
  containerCard.style.display = "none";
  containerPreciosVehiculos.style.display = "none";
  contenedorPagar.style.display = "flex";
};

console.log(vehiculoAsociado);

let tarjetaIngresada = {
  nombre: "",
  apellido: "",
  dni: 0,
  tarjeta: 0,
  seguridad: 0,
  vencimiento: "",
};

const rellenarTarjeta = () => {
  tarjetaIngresada.nombre = inputNombre.value;
  tarjetaIngresada.apellido = inputApellido.value;
  tarjetaIngresada.dni = inputDni.value;
  tarjetaIngresada.tarjeta = inputTarjeta.value;
  tarjetaIngresada.seguridad = inputSeguridad.value;
  tarjetaIngresada.vencimiento = inputVencimiento.value;
};

formPago.onsubmit = (event) => {
  event.preventDefault();
  rellenarTarjeta();
  subirAlLs("tarjeta", tarjetaIngresada);
  contenedorPagar.style.display = "none";
  vehiculosHtml.style.display = "none";
  bienvenida.style.display = "flex";
  tituloPrecios.style.display = "none";
  swal({
    title: "Pago aceptado!",
    text: "Pronto le estara llegando un mail con su recibo, a continuacion debe crear una cuenta.",
    icon: "success",
    button: "Aceptar",
  });
  divRegistrarse.style.display = "flex";
};

const contratarServicios = document.querySelector("#contratarServicios");

formRegistrarse.onsubmit = (e) => {
  e.preventDefault();

  fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/users", {
    method: "POST",
    body: JSON.stringify({
      apellido: inputApellidoRegistrarse.value,
      contrasena: inputContraRegistrarse.value,
      name: inputNombreRegistrarse.value,
      email: inputEmailRegistrarse.value,
      autos: vehiculoAsociado[2].cantidad,
      motos: vehiculoAsociado[1].cantidad,
      bicis: vehiculoAsociado[0].cantidad,
      precioMensual:
        vehiculoAsociado[2].cantidad * vehiculoAsociado[2].precio +
        (vehiculoAsociado[1].cantidad + vehiculoAsociado[1].precio) +
        (vehiculoAsociado[0].cantidad + vehiculoAsociado[0].precio),
      tarjeta: tarjetaIngresada,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log("error"));

  botonIniciarSesion.style.display = "none";

  //profe, si ves que no sube el usuario registrado a la api, es por el el setTimeout, el 95% me funciono bien, hago el setTimeout para que se actualice y aparezca la section "Estado Seguro", sin necesidad de tener q cambiar a otra seccion para q aparezca la misma.
  setTimeout(() => {
    location.reload();
  }, 1000);
};
