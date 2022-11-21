import { serviceSkills } from "../../sevices/skills-service.js"
import { verificarRegistro } from "../login-controller.js"

const crearSkills = (id, titulo, img) => {
    const skill = document.createElement('div')
    skill.classList.add('skills__tecnologia')
    const contenido = `
    <div class="btnEditar" data-editar>
    <i class="fa-solid fa-trash-can" id="${id}"></i>
        <a href="http://127.0.0.1:5500/formularios/editar/editar-skill.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
        </div>
    <h3>${titulo}</h3>
    <img src="${img}">
`
skill.innerHTML = contenido
const btnEditar = skill.querySelector('[data-editar]');
if (verificarRegistro.login() == true){
    btnEditar.style.display = 'inherit'
}else{
    btnEditar.style.display = 'none'
}
//buscamos el icono de eliminar que contiene la constante skill
const eliminar = skill.querySelector('.fa-trash-can');

eliminar.addEventListener('click', () =>{
swal('Estas seguro que quieres eliminar el skill?',{
    buttons: ['Sí', 'No']
}).then((respuesta)=>{
    if(respuesta == null){
    //buscamos el id del boton de eliminar
    const id = eliminar.id;
    serviceSkills.borrarSkill(id).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
    }else{
        return
    }
})





})





return skill

}
const skills = document.querySelector('[data-contenido]');
serviceSkills.listaSkills().then((data) =>  {
    data.forEach(({id, titulo, img})=> {
        const agregarSkill = crearSkills(id, titulo, img)
        skills.appendChild(agregarSkill)
        
    });
});
