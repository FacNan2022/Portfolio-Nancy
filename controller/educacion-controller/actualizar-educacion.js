import { serviceEducacion } from "../../sevices/educacion-service.js";

const obtenerEducacion = () => {
    const url = new URL(window.location);
    const ide = url.searchParams.get('id');
    const titulo = document.querySelector('[data-titulo]');
    const descripcion = document.querySelector('[data-descripcion]');
    const img = document.querySelector('[data-imagen]');
    serviceEducacion.detalleEducacion(ide).then((educacion) => {
        titulo.value = educacion.titulo;
        descripcion.value = educacion.descripcion;
        img.value = educacion.img;
    })
}

obtenerEducacion();

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit',(evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const ide = url.searchParams.get('id');
    const titulo = document.querySelector('[data-titulo]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const img = document.querySelector('[data-imagen]').value;

    serviceEducacion.actualizarEducacion(ide, titulo, descripcion, img).then(() => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })


})