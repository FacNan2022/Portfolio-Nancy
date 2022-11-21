import { serviceSkills } from "../../sevices/skills-service.js"

const obtenerInformacion = () => {
  const url = new URL(window.location)
  const ide = url.searchParams.get('id')
  const titulo = document.querySelector('[data-titulo]')
  const img = document.querySelector('[data-imagen]')

  serviceSkills.detallesSkill(ide).then((respuesta) => {
    titulo.value = respuesta.titulo
    img.value = respuesta.img

    console.log(respuesta);
  })
}

obtenerInformacion();
const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const url = new URL(window.location)
  const ide = url.searchParams.get('id')
  const titulo = document.querySelector('[data-titulo]').value
  const img = document.querySelector('[data-imagen]').value
  serviceSkills.actualizarSkill(ide, titulo, img).then(() => {
    window.location.href = 'http://127.0.0.1:5500/index.html'
  })
})