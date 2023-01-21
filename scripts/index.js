// botones modo oscuro y modo claro

const botonModoOscuro = document.querySelector("#botonModoOscuro");

const botonModoClaro = document.querySelector("#botonModoClaro");

const body = document.querySelector("body");

const p = document.querySelector("p");

const header = document.querySelector("header");

const footer = document.querySelector("footer");

// divs padres ( iniciar sesion y proceso simular)
const tituloMain = document.querySelector(".tituloMain");

const iniciarSesion = document.querySelector(".iniciarSesion");

const botonIniciarSesion = document.querySelector("#BotonIniciarSesion");

const divCerrarSesion = document.querySelector("#divCerrarSesion");

const botonCerrarSesion = document.querySelector("#botonCerrarSesion");

const falsoUsuario = document.querySelector(".falsoUsuario");

// formulario inicio de sesion
const formIniciarSesion = document.querySelector("#formIniciarSesion");

const inputMailInicioSesion = document.querySelector("#inputMailInicioSesion");

const inputContrasenaInicioSesion = document.querySelector(
  "#inputContrasenaInicioSesion"
);

const containerDefault = document.querySelector("#paginaDefault");

// cliente
const vehiculosClientes = document.querySelector("#vehiculosClientes");

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

const obtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};

botonModoOscuro.onclick = () => {
  botonModoOscuro.style.display = "none";
  botonModoClaro.style.display = "flex";
  body.style.backgroundColor = "grey";
  header.style.backgroundColor = "#121212";
  footer.style.backgroundColor = "#121212";
  subirAlLs("modo", "oscuro");
};

botonModoClaro.onclick = () => {
  botonModoClaro.style.display = "none";
  botonModoOscuro.style.display = "flex";
  body.style.backgroundColor = "white";
  header.style.backgroundColor = "rgb(18, 29, 51)";
  footer.style.backgroundColor = "rgb(18, 29, 51)";
  subirAlLs("modo", "claro");
};

let modoDePantalla = obtenerDelLs("modo");

if (modoDePantalla === "oscuro") {
  botonModoOscuro.style.display = "none";
  botonModoClaro.style.display = "flex";
  body.style.backgroundColor = "grey";
  header.style.backgroundColor = "#121212";
  footer.style.backgroundColor = "#121212";
}

botonIniciarSesion.onclick = () => {
  tituloMain.style.display = "none";
  iniciarSesion.style.display = "flex";
  botonIniciarSesion.style.display = "none";
};

botonCerrarSesion.onclick = () => {
  botonIniciarSesion.style.display = "flex";
  divCerrarSesion.style.display = "none";
  vehiculosClientes.style.display = "none";
  localStorage.removeItem("usuario");
  localStorage.removeItem("contrasena");
  setTimeout(() => {
    location.reload();
  }, 500);
};

if (obtenerDelLs("usuario") != null && obtenerDelLs("contrasena") != null) {
  botonIniciarSesion.style.display = "none";
  divCerrarSesion.style.display = "flex";
  vehiculosClientes.style.display = "flex";
  Toastify({
    text: `Bienvenido ${obtenerDelLs("usuario")}`,
    duration: 2500,
    close: true,
  }).showToast();
}

let usuarioVerdadero;
let usuariosRegistrados;

const esUsuario = (objeto, email, contrasena) => {
  for (let i = 0; i < objeto.length; i++) {
    if (objeto[i].email === email && objeto[i].contrasena === contrasena) {
      return true;
    }
  }
  return false;
};

formIniciarSesion.onsubmit = (event) => {
  event.preventDefault();
  fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
      usuarioVerdadero = esUsuario(
        data,
        inputMailInicioSesion.value,
        inputContrasenaInicioSesion.value
      );
      if (usuarioVerdadero === true) {
        tituloMain.style.display = "flex";
        divCerrarSesion.style.display = "flex";
        iniciarSesion.style.display = "none";
        vehiculosClientes.style.display = "flex";
        subirAlLs("usuario", inputMailInicioSesion.value);
        subirAlLs("contrasena", inputContrasenaInicioSesion.value);
      } else {
        if (usuarioVerdadero === false) {
          falsoUsuario.style.display = "flex";
        }
      }
    });
};

fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(() => console.log("error"));
