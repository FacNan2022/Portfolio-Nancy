import { serviceSkills } from "../../sevices/skills-service.js";

const formulario = document.querySelector('[data-form]');



formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value
    const img = document.querySelector('[data-imagen]').value

    serviceSkills.agregarSkill(titulo, img).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
}) 