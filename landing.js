const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const closeNav = document.querySelector('.nav__close');
const itemNav = document.querySelectorAll('.nav__item--active');
const apiKey = '?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL';
const url = 'https://api.giphy.com/v1/gifs/trending';
const urlFull = 'https://api.giphy.com/v1/gifs/search?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL&q=guitar&limit=3&offset=0&rating=g&lang=en'
const contenido = document.querySelector(".strings");



/*EVENTOS MENU*/
navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('nav__menu-visible')
})
    
closeNav.addEventListener('click',()=>{
    navMenu.classList.remove('nav__menu-visible')
})

itemNav.forEach(n => n.addEventListener('click', removeNav))
function removeNav() {
    navMenu.classList.remove('nav__menu-visible')
}


/*PETICIÓN A API GIPHY */
document.addEventListener('DOMContentLoaded', datos);

/*async function datos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}*/
function datos() {
    fetch( urlFull)
        .then(respuesta => respuesta.json())
        .then(resultado=> Seeimages(resultado.data))/*.data[0].images.original.url */
        .catch(error => console.log(error));
        
}


function Seeimages(imagesData) {
    
    console.log(imagesData);
    
    let giffHTML = ''
   imagesData.forEach(img=>{
        let giff = img.images.original.url//EUREKAAAAAA
        
       console.log(giff);
       giffHTML +=`
       <div class="strings__instruments--item">
            
            <img src="${giff}" alt="giff">
            <span>Guitarra</span>
        </div>  
       `
    })
    contenido.innerHTML = giffHTML
    /*for (let i = 47; i < imagesData.length; i++) {
        console.log(imagesData[i].images.original.url);
        
    }*/
    
}
/*function  verDatos(datos) {
    const contenido = document.querySelector(".strings"); 
   let html = "";
    datos.forEach(instrument => {
        const {url} = instrument;
        html += `
                   
        <div class="strings__instruments--item">
          <img class="novedades-img--unique"  src="${url}" alt="giff">
          <span>Guitarra</span>
        </div>    
            `        
    });
    contenido.innerHTML=html 
}*/