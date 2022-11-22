import { serviceEducacion } from "../../sevices/educacion-service.js";
import { verificarRegistro } from "../login-controller.js";

const crearTarjeta = (id, img, titulo, descripcion) => {
    const tarjetaEducacion = document.createElement('div');
    tarjetaEducacion.classList.add("educacion__lista");
    const contenido = `
    <div class="capa">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <div class="btn-editar" data-edicion>
    <i class="fa-solid fa-trash-can" id="${id}"></i>
    <a href="http://127.0.0.1:5500/formularios/editar-educacion.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
    </div>
    </div>
        <img src="${img}">
        
    
`

    tarjetaEducacion.innerHTML = contenido
    const botonesEdicion = tarjetaEducacion.querySelector('[data-edicion]')
    if (verificarRegistro.login() == true){
        botonesEdicion.style.display = 'inherit'
    }else{
        botonesEdicion.style.display = 'none'

    }
    const eliminar = tarjetaEducacion.querySelector('.fa-trash-can')


    eliminar.addEventListener('click', () => {
        const ide = eliminar.id
        swal('Estas seguro que deseas eliminar la educacion?', {
            buttons: ['Sí', 'No']
        }).then((respuesta) => {
           if(respuesta == null){
            serviceEducacion.eliminarEducacion(ide).then(() => {
                window.location.href = 'http://127.0.0.1:5500/index.html'
            })
           }else{
            console.log('No se eliminó la educación');
           }
        })

        const  buttons = document.querySelector('button').value
        console.log(buttons);
    });

    return tarjetaEducacion

};

serviceEducacion.listaEducacion().then((data) => {
    data.forEach(({ id, img, titulo, descripcion }) => {
        const section = document.querySelector('[data-educacion]')
        const educacion = crearTarjeta(id, img, titulo, descripcion)
        section.appendChild(educacion)

    });
});



