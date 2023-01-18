// divs para escribir
const cantidadAutosHTML = document.querySelector("#cantidadAutos");
const preciosAutosHTML = document.querySelector("#preciosAutos");
const cantidadMotosHTML = document.querySelector("#cantidadMotos");
const cantidadBicisHTML = document.querySelector("#cantidadBicis");
const precioTotalMisSegurosHTML = document.querySelector("#precioTotalMisSeguros");

const ObtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave));
};


const escribirMisSeguros = () => {
    let autoCantidad= ObtenerDelLs("autos")
    let textoAutos = `
    <p>Cantidad de autos asegurados: ${autoCantidad}</p>
    <p>Precio total de los autos: ${autoCantidad*10000}$</p>    
    `
    cantidadAutosHTML.innerHTML = textoAutos

    let motoCantidad = ObtenerDelLs("motos")
    let textoMotos = `
    <p>Cantidad de motos aseguradas: ${motoCantidad}</p>
    <p>Precio total de las motos: ${motoCantidad*7000}$</p>
    `
    cantidadMotosHTML.innerHTML = textoMotos

    let biciCantidad = ObtenerDelLs("bicicletas")
    let textoBicicletas = `
    <p>Cantidad de bicicletas aseguradas: ${biciCantidad}</p>
    <p>Precio total de las bicis: ${biciCantidad*2000}$</p>
    `
    cantidadBicisHTML.innerHTML = textoBicicletas

    let textoPreciosTotales = `
    <p style="font-size: 45px">Precio total de todos sus seguros: ${(biciCantidad*2000) + (motoCantidad*7000) + (autoCantidad*10000)}$</p>
    `
    precioTotalMisSegurosHTML.innerHTML = textoPreciosTotales
}

escribirMisSeguros()