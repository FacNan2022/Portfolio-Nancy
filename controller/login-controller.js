import { usuarioService } from "../sevices/usuario-service.js"

let registro = '';

const login = () => {
    usuarioService.leerUsuario().then((usuario) => {
        usuario.forEach(({ registrada }) => {
            registro = registrada
            const logeado = document.querySelector('[data-login]');

            const btnLogout = document.querySelector('.logout');
            if (registro == true){
                btnLogout.style.display = 'inherit'
                logeado.style.display = 'none'
            }else{
                btnLogout.style.display = 'none'
                logeado.style.display = 'inherit'
            }

            const agregar = document.querySelectorAll('[data-agregar]');
            agregar.forEach((boton) =>{
            if (registro == true){
                boton.style.display = 'inherit'
            }else{
                boton.style.display = 'none'
            }
            })

        })
    })
    return registro
}

login();



export const verificarRegistro = {
    login
}