import { serviceEducacion } from "../../sevices/educacion-service.js";
console.log('js conectado');
const formulario = document.querySelector('[data-agregar]');
formulario.addEventListener('click', (evento) => {
    evento.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const img = document.querySelector('[data-imagen]').value;
console.log(titulo, descripcion, img);
    serviceEducacion.crearEducacion(titulo, descripcion, img).then(() => {
        window.location.href = 'http://127.0.0.1:5500/index.html'

    });

});
