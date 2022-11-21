import { proyectosService } from "../../sevices/proyectos-service.js";

const obtenerProyectos = () =>{
    const url = new URL(window.location)
    const ide = url.searchParams.get('id')
    const nombre = document.querySelector('[data-nombre]');
    const descripcion = document.querySelector('[data-descripcion]');
    const img = document.querySelector('[data-imagen]');
    const link = document.querySelector('[data-url]');

    proyectosService.obtenerInformacion(ide).then((respuesta) => {
      nombre.value= respuesta.nombre;
      descripcion.value = respuesta.descripcion;
      img.value = respuesta.img;
      link.value = respuesta.url;

    })
}

obtenerProyectos();

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) =>{
evento.preventDefault();
const url = new URL(window.location)
const ide = url.searchParams.get('id')
const nombre = document.querySelector('[data-nombre]').value
const descripcion = document.querySelector('[data-descripcion]').value
const img = document.querySelector('[data-imagen]').value
const link = document.querySelector('[data-url]').value

proyectosService.actualizarProyecto(ide, nombre, descripcion, img, link).then(() => {
    window.location.href = 'http://127.0.0.1:5500/'
})
})
