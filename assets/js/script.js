import Consulta from "./modulos.js";

const formulario = document.getElementById("formulario");

const nombrePropietarioInput = document.getElementById("propietario");
const telefonoPropietarioInput = document.getElementById("telefono");
const direccionPropietarioInput = document.getElementById("direccion");
const nombreMascotaInput = document.getElementById("nombreMascota");
const tipoAnimalInput = document.getElementById("tipo");
const motivoConsultaInput = document.getElementById("enfermedad");

const ulResultado = document.querySelector("#resultado ul");

formulario.addEventListener("submit", function (eventoGatillado) {
  eventoGatillado.preventDefault();
  const objetoConsulta = crearObjetoConsulta();
  mostrarDataEnHTML(objetoConsulta);
});

function crearObjetoConsulta() {
  const nombrePropietario = nombrePropietarioInput.value;
  const telefonoPropietario = telefonoPropietarioInput.value;
  const direccionPropietario = direccionPropietarioInput.value;
  const nombreMascota = nombreMascotaInput.value;
  const tipoAnimal = tipoAnimalInput.value;
  const motivoConsulta = motivoConsultaInput.value;
  const fechaConsulta = new Date();
  const objetoConsulta = new Consulta(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota,
    motivoConsulta,
    fechaConsulta
  );
  return objetoConsulta;
}

function mostrarDataEnHTML(objetoConsulta) {
  const primerElementoLista = document.createElement("li");
  primerElementoLista.innerHTML = `${objetoConsulta.datosPropietario()}`;
  const segundoElementoLista = document.createElement("li");
  segundoElementoLista.innerHTML = `${objetoConsulta.tipo}, mientras que el nombre de la mascota es: ${objetoConsulta.nombreMascota} y la enfermedad es: ${objetoConsulta.motivoConsulta}`;
  ulResultado.innerHTML = "";
  ulResultado.appendChild(primerElementoLista);
  ulResultado.appendChild(segundoElementoLista);
}

telefonoPropietarioInput.addEventListener("input", function (eventoInput) {
  const dataIngresada = eventoInput.data;
  const conversionNumeroDataIngresada = +dataIngresada;
  if (isNaN(conversionNumeroDataIngresada)) {
    this.value = this.value.slice(0, -1);
  }
});
