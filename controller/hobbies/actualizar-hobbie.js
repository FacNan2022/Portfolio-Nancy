import { serviceHobbies } from "../../sevices/hobbies-service.js"

const obtenerHobbie = () => {
    const url = new URL(window.location)
    const ide = url.searchParams.get('id')
    const titulo = document.querySelector('[data-titulo]')
    const img = document.querySelector('[data-imagen]')


    serviceHobbies.detalleHobbie(ide).then((data) => {
      titulo.value = data.titulo
      img.value = data.img
    });

}

obtenerHobbie();

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
evento.preventDefault()
const url = new URL(window.location);
const ide = url.searchParams.get('id')
const titulo = document.querySelector('[data-titulo]').value;
const img = document.querySelector('[data-imagen]').value;

serviceHobbies.actualizarHobbie(ide, titulo, img).then(() => {
    window.location.href = 'http://127.0.0.1:5500/index.html'
})
})