import { serviceHobbies } from "../../sevices/hobbies-service.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
evento.preventDefault()
const titulo = document.querySelector('[data-titulo]').value;
const img = document.querySelector('[data-imagen]').value;
serviceHobbies.crearHobbie(titulo, img).then(() => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

})