import { serviceHobbies } from "../../sevices/hobbies-service.js";

const tarjetaHobbie = (id, titulo, img) => {
    const hobbie = document.createElement('div')
    hobbie.classList.add("hobbie__item")

    
    const contenido = `
    <figure class="hobbie">
        <p>${titulo}</p>
        <img src="${img}" alt="">

    </figure>
`

hobbie.innerHTML = contenido
console.log(hobbie);
return hobbie

}
console.log(tarjetaHobbie());


const hobbies = document.querySelector('[data-hobbies]')
serviceHobbies.listaHobbies().then((data) =>{
    data.forEach(({id, titulo, img})=> {
        const agregarHobbie = tarjetaHobbie(id, titulo, img)
        hobbies.appendChild(agregarHobbie)
        
    })
})


