const divFormContacto = document.querySelector(".divContacto");

const formContacto = document.querySelector(".formContacto");

const inputEmailConsulta = document.querySelector("#inputEmailConsulta");

const textareaConsulta = document.querySelector("#textareaConsulta");

const inputNombreConsulta = document.querySelector("#inputNombreConsulta");

const subirConsultas = () => {
  fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/questions")
    .then((res) => res.json())
    .then((data) => {
      subirAlLs("consultas", data);
    });
};

formContacto.onsubmit = (e) => {
  e.preventDefault();

  fetch("https://63bf4b24a177ed68abaebd20.mockapi.io/questions", {
    method: "POST",
    body: JSON.stringify({
      email: inputEmailConsulta.value,
      consulta: textareaConsulta.value,
      name: inputNombreConsulta.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      subirConsultas();
    });
  formContacto.reset();

  swal({
    title: "Consulta enviada!",
    text: "Esperemos resolverle su consulta a la brevedad!",
    icon: "success",
    button: "Aceptar",
  });
};
