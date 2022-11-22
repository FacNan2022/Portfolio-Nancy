export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }

    if (input.validity.valid) {
        
        input.parentElement.classList.remove('input-error');
        input.parentElement.querySelector('.mensaje-error').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-error');
        input.parentElement.querySelector('.mensaje-error').innerText = mostrarMensajeDeError(tipoInput, input)
       
    }
}

const tipoDeErrores = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch'
]

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacio',
        patternMismatch:
            "Al menos 6 caracteres, máximo 50, debe contener letras mayúsculas o minúsculas y no debe contener números"
    },
    apellido: {
        valueMissing: 'El campo apellido no puede estar vacio',
        patternMismatch:
            "Al menos 6 caracteres, máximo 50, debe contener letras mayúsculas o minúsculas y no debe contener números"
    },
    telefono: {
        valueMissing: 'El campo teléfono no puede estar vacio',
    },
    email: {
        valueMissing: 'El campo email no puede estar vacio',
        typeMismatch: 'El correo no es válido'
    },
    mensaje: {
        valueMissing: 'El campo mensaje no puede estar vacio',
        patternMismatch:
            "Al menos 6 caracteres, máximo 300, debe contener letras mayúsculas o minúsculas y no debe contener números"

    }

}

const validadores = {
    nombre: (input) => validarNombre(input)
}

function mostrarMensajeDeError(tipoInput, input) {
    let mensaje = ''
    tipoDeErrores.forEach((error) => {
        if (input.validity[error])
            
       
        mensaje = mensajesDeError[tipoInput][error];
        console.log(mensaje)

    })


    return mensaje
}

function validarNombre(input) {
    let mensaje = ''
    if (input.value == 0) {
        mensaje = 'Debes poner al mennos una letra'
    }

    input.setCustomValidity(mensaje);
}
