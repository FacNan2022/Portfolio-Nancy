import { usuarioService } from "../sevices/usuario-service.js";

const btnLogout = document.querySelector('.logout');
btnLogout.addEventListener('click', () => {
usuarioService.leerUsuario().then((registro) => {
   registro.forEach(({id, email, password, registrada}) => {
    registrada = false
    usuarioService.actualizarUsuario(id, email, password, registrada).then(() =>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
   })

})
})
