import { serviceHobbies } from "../../sevices/hobbies-service.js";

const tarjetaHobbie = (id, titulo, img) => {
    const hobbie = document.createElement('div')
    hobbie.classList.add("hobbie__item")

    
    const contenido = `
    <p>${titulo}</p>
    <i class="fa-solid fa-trash-can" id="${id}"></i>
        <a href="http://127.0.0.1:5500/formularios/editar/editar-hobbie.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
    <figure class="hobbie">
        <img src="${img}" alt="">

    </figure>
`
hobbie.innerHTML = contenido

const eliminar = hobbie.querySelector('.fa-trash-can')
const ide = eliminar.id
eliminar.addEventListener('click', () => {
    swal('Estas seguro que deseas eliminar el hobbie?', {
        buttons: ['Sí', 'No']
    }).then((respuesta) => {
       if (respuesta == null){
        serviceHobbies.eliminarHobbie(ide).then(() => {
            window.location.href = 'http://127.0.0.1:5500/index.html'
        })
       }else{
        return 
       }
    })
})
return hobbie

}
console.log(tarjetaHobbie());


const hobbies = document.querySelector('[data-hobbies]')
serviceHobbies.listaHobbies().then((data) =>{
    data.forEach(({id, titulo, img})=> {
        const agregarHobbie = tarjetaHobbie(id, titulo, img)
        hobbies.appendChild(agregarHobbie)
        
    });
});


