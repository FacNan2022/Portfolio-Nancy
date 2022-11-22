import { proyectosService } from "../../sevices/proyectos-service.js";
import { verificarRegistro } from "../login-controller.js";

const obtenerProyectos = (id, nombre, descripcion, img, url) =>{
    const crearProyecto = document.createElement('div');
    crearProyecto.classList.add('proyectos__descripcion')
    const contenido = ` 
    <div class="btn-editar" data-editar>
    <i class="fa-solid fa-trash-can btn-danger" id="${id}"></i>
    <a href="http://127.0.0.1:5500/formularios/editar/editar-proyecto.html?id=${id}"><i class="fa-solid fa-pen btn-success"></i></a>   
    </div>
    <a href="${url}"><img src="${img}" alt=""></a>
    
    <h3>${nombre}</h3>
    <p>${descripcion}</p>

`

crearProyecto.innerHTML = contenido;
const btnEditar = crearProyecto.querySelector('[data-editar]');
if (verificarRegistro.login() == true){
    btnEditar.style.display = 'inherit'
}else{
    btnEditar.style.display = 'none'
}

const btnEliminar = crearProyecto.querySelector('.fa-trash-can')

btnEliminar.addEventListener('click', () => {
    swal('Estas seguro que quieres eliminar el skill?',{
        buttons: ['Sí', 'No']
    }).then((respuesta) => {
        if (respuesta == null){
            const ide = btnEliminar.id
         
            proyectosService.eliminarProyecto(ide).then (() => {
                window.location.href = 'http://127.0.0.1:5500/'
            })
        }else{
            return
        }
       
    })

  
})
return crearProyecto
}

const section = document.querySelector('[data-proyecto]');
proyectosService.listaProyectos().then((proyectos) => {
    proyectos.forEach(({ id, nombre, descripcion, img, url}) => {
        const agregarProyecto = obtenerProyectos(id, nombre, descripcion, img, url)
        section.appendChild(agregarProyecto)

    })
})