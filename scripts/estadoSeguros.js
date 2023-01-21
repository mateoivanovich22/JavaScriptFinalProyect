// divs para escribir
const cantidadAutosHTML = document.querySelector("#cantidadAutos");
const preciosAutosHTML = document.querySelector("#preciosAutos");
const cantidadMotosHTML = document.querySelector("#cantidadMotos");
const cantidadBicisHTML = document.querySelector("#cantidadBicis");
const precioTotalMisSegurosHTML = document.querySelector(
  "#precioTotalMisSeguros"
);

// modificar cantidad de vehiculos
const sumarAuto = document.querySelector("#sumarAuto");
const restarAuto = document.querySelector("#restarAuto");

const sumarMoto = document.querySelector("#sumarMoto");
const restarMoto = document.querySelector("#restarMoto");

const sumarBici = document.querySelector("#sumarBici");
const restarBici = document.querySelector("#restarBici");

// mostrar tarjeta
const mostrarTarjeta = document.querySelector("#mostrarTarjeta");
const botonMostrarTarjeta = document.querySelector("#botonMostrarTarjeta");
const botonCerrarTarjeta = document.querySelector("#botonCerrarTarjeta");


const ObtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};

let valoresCorrectos = false;

let emailIngresado = ObtenerDelLs("usuario");

let contraIngresada = ObtenerDelLs("contrasena");

let autosCantidad = 0;

let motosCantidad = 0;

let bicisCantidad = 0;

let idUsuario = 0;

let apellido, dni, nombre, seguridad, tarjeta, vencimiento;

const buscarDatos = (
  arrayDeObjetos,
  inputMailInicioSesion,
  inputContrasenaInicioSesion
) => {
  for (let i = 0; i < arrayDeObjetos.length; i++) {
    if (
      arrayDeObjetos[i].email === inputMailInicioSesion &&
      arrayDeObjetos[i].contrasena === inputContrasenaInicioSesion
    ) {
      autosCantidad = arrayDeObjetos[i].autos;
      motosCantidad = arrayDeObjetos[i].motos;
      bicisCantidad = arrayDeObjetos[i].bicis;
      idUsuario = arrayDeObjetos[i].id;
      apellido = arrayDeObjetos[i].tarjeta.apellido;
      dni = arrayDeObjetos[i].tarjeta.dni;
      nombre = arrayDeObjetos[i].tarjeta.nombre;
      seguridad = arrayDeObjetos[i].tarjeta.seguridad;
      tarjeta = arrayDeObjetos[i].tarjeta.tarjeta;
      vencimiento = arrayDeObjetos[i].tarjeta.vencimiento;
      return true;
    }
  }
  return false;
};

// No logre hacer dos funciones genericas, una que sume y otra q reste, para luego reutilizarlas en todos los "onlick", y asi modular mejor
sumarAuto.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      autosCantidad = data.autos + 1;
      fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`, {
        method: "PUT",
        body: JSON.stringify({
          autos: autosCantidad,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(() => console.log("error"));
    })
    .catch(() => console.log("error"));
};
sumarMoto.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      motosCantidad = data.motos + 1;
      fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`, {
        method: "PUT",
        body: JSON.stringify({
          motos: motosCantidad,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(() => console.log("error"));
    })
    .catch(() => console.log("error"));
};

sumarBici.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      bicisCantidad = data.bicis + 1;
      fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`, {
        method: "PUT",
        body: JSON.stringify({
          bicis: bicisCantidad,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(() => console.log("error"));
    })
    .catch(() => console.log("error"));
};

restarAuto.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      autosCantidad = data.autos - 1;
      if (autosCantidad >= 0) {
        fetch(
          `https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`,
          {
            method: "PUT",
            body: JSON.stringify({
              autos: autosCantidad,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch(() => console.log("error"));
      }
    })
    .catch(() => console.log("error"));
};

restarMoto.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      motosCantidad = data.motos - 1;
      if (motosCantidad >= 0) {
        fetch(
          `https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`,
          {
            method: "PUT",
            body: JSON.stringify({
              motos: motosCantidad,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch(() => console.log("error"));
      }
    })
    .catch(() => console.log("error"));
};

restarBici.onclick = () => {
  fetch(`https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      bicisCantidad = data.bicis - 1;
      if (bicisCantidad >= 0) {
        fetch(
          `https://63bf4b24a177ed68abaebd20.mockapi.io/users/${idUsuario}`,
          {
            method: "PUT",
            body: JSON.stringify({
              bicis: bicisCantidad,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch(() => console.log("error"));
      }
    })
    .catch(() => console.log("error"));
};

const escribirMisSeguros = () => {
  let textoAutos = `
    <p>-Cantidad de autos asegurados: ${autosCantidad}</p>
    <p>-Precio total de los autos: ${autosCantidad * 10000}$</p>    
    `;
  cantidadAutosHTML.innerHTML = textoAutos;

  let textoMotos = `
    <p>-Cantidad de motos aseguradas: ${motosCantidad}</p>
    <p>-Precio total de las motos: ${motosCantidad * 7000}$</p>
    `;
  cantidadMotosHTML.innerHTML = textoMotos;

  let textoBicicletas = `
    <p>-Cantidad de bicicletas aseguradas: ${bicisCantidad}</p>
    <p>-Precio total de las bicis: ${bicisCantidad * 2000}$</p>
    `;
  cantidadBicisHTML.innerHTML = textoBicicletas;

  let textoPreciosTotales = `
    <p style="font-size: 45px">El precio total de todos sus seguros es: ${
      bicisCantidad * 2000 + motosCantidad * 7000 + autosCantidad * 10000
    }$</p>
    `;
  precioTotalMisSegurosHTML.innerHTML = textoPreciosTotales;
};

const cargarValoresDelUsuario = () => {
  fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
      valoresCorrectos = buscarDatos(data, emailIngresado, contraIngresada);
      if (valoresCorrectos === true) {
        escribirMisSeguros();
      }
    });
};

cargarValoresDelUsuario();

botonMostrarTarjeta.onclick = () => {
  botonMostrarTarjeta.style.display = "none";
  mostrarTarjeta.style.display = "flex";
  botonCerrarTarjeta.style.display = "flex";
  let escribirLaTarjeta = `
    <label>
        <h6>.Nombre</h6>
        <input type="text" value="${nombre}" disabled/>
    </label>
    <label> 
        <h6>.Apellido</h6>
        <input type="text" value="${apellido}" disabled/>
    </label>
    <label>
        <h6>.Dni</h6>
        <input type="number" value="${dni}" disabled/>
    </label>
    <label>
        <h6>.Numero de tarjeta</h6>
        <input
        type="number"
        value="${tarjeta}"
        disabled
        />
    </label>
    <label>
        <h6>.Codigo de seguridad</h6>
        <input
        type="number"
        value="${seguridad}"
        disabled
        />
    </label>
    <label>
        <h6>.Vencimiento</h6>
        <input
        type="text"
        value="${vencimiento}"
        disabled
        />
    </label>

    `;
  mostrarTarjeta.innerHTML = escribirLaTarjeta;
};

botonCerrarTarjeta.onclick = () => {
  botonMostrarTarjeta.style.display = "flex";
  botonCerrarTarjeta.style.display = "none";
  mostrarTarjeta.style.display = "none";
};
