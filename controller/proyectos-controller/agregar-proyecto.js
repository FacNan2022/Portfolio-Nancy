import { proyectosService } from "../../sevices/proyectos-service.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    const img = document.querySelector('[data-imagen]').value
    const url = document.querySelector('[data-url]').value
    proyectosService.agregarProyecto(nombre, descripcion, img, url).then(() =>{
        window.location.href = 'http://127.0.0.1:5500/'
    })
})