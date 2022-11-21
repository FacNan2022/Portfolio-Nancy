import { servicePerfil } from "../sevices/perfil-services.js";
import { verificarRegistro } from "./login-controller.js";

const crearLinea = (id, nombre, apellido, descripcion, img, ciudad) =>{
    const fotoPerfil = document.createElement('div')
    fotoPerfil.classList.add('foto-perfil-contenido')
    const contenido = `<div class="foto-perfil">
    <img src="${img}">
    <h3>${nombre} ${apellido}</h3>
    <p>${ciudad}</p>
    <a href="http://127.0.0.1:5500/formularios/editar-perfil.html?id=${id}"><button data-editar>Editar</button></a>
</div>
<div class="sobre-mi__texto">
    <h3 class="sobre__titulo">Sobre mi</h3>
    <p class="sobre__descripcion">${descripcion}</p>
</div>`

fotoPerfil.innerHTML = contenido;
const editar = fotoPerfil.querySelector('[data-editar]')
console.log(editar);
if (verificarRegistro.login() == true){
    editar.style.display = 'inherit'
}else{
    editar.style.display = 'none'
}

return (fotoPerfil)
}

servicePerfil.infoPerfil().then((perfil)=>{
    perfil.forEach(({id, nombre, apellido, descripcion, img, ciudad})=>{
        const section = document.querySelector('[data-sobre-mi]');
        const agregarInfo = crearLinea(id, nombre, apellido, descripcion,img, ciudad);
        section.appendChild(agregarInfo);
    });

    
});


