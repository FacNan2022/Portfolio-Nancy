import { usuarioService } from "../sevices/usuario-service.js";
import { verificarRegistro } from "./login-controller.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    usuarioService.leerUsuario().then((respuesta) => {
        respuesta.forEach(({id, email, password, registrada}) =>{
            const Email= document.querySelector('[data-email]').value
            const Password = document.querySelector('[data-password]').value

            if (Email == email && Password == password){
              registrada = true
            usuarioService.actualizarUsuario(id, email, password, registrada).then(() => {
                window.location.href = 'http://127.0.0.1:5500/index.html'
            })
            }else{
                alert('Ud necesita registrarse')
            }

        })
    })
})


