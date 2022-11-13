import { servicePerfil } from "../sevices/perfil-services.js";

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const nombre = document.querySelector('[data-nombre]');
    const apellido = document.querySelector('[data-apellido]');
    const descripcion = document.querySelector('[data-descripcion]');
    const imagen = document.querySelector('[data-imagen]');
    const ciudad = document.querySelector('[data-ciudad]');

   servicePerfil.detallePerfil(id).then((perfil)=>{
    nombre.value = perfil.nombre
    apellido.value = perfil.apellido
    descripcion.value = perfil.descripcion
    imagen.value = perfil.img
    ciudad.value = perfil.ciudad
   });
}
console.log(obtenerInfo());

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const nombre = document.querySelector('[data-nombre]').value
    const apellido = document.querySelector('[data-apellido]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    const imagen = document.querySelector('[data-imagen]').value
    const ciudad = document.querySelector('[data-ciudad]').value

    servicePerfil.actualizarPerfil(id, nombre, apellido, descripcion, imagen, ciudad).then(() =>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })

})