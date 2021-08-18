document.addEventListener("DOMContentLoaded", callApi);

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const closeNav = document.querySelector(".nav__close");
const itemNav = document.querySelectorAll(".nav__item--active");

const urlFull = "https://api.giphy.com/v1/gifs/search?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL&q=guitar&limit=3&offset=0&rating=g&lang=en";
const percussion = "https://api.giphy.com/v1/gifs/search?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL&q=percusion&limit=3&offset=0&rating=g&lang=en";
const urlwind = "https://api.giphy.com/v1/gifs/search?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL&q=trumpets&limit=3&offset=0&rating=g&lang=en";
const urlElectronic = 'https://api.giphy.com/v1/gifs/search?api_key=wxKOBkt2brbVYuocbpiMq4r1rJgeSrXL&q=DJ&limit=3&offset=0&rating=g&lang=es';

const contenido = document.querySelector(".strings__instruments");
const resultPercussion = document.querySelector(".percussion__instruments");
const resultWind = document.querySelector(".wind__instruments");
const resultElectronic = document.querySelector('.electronics__instruments')


/*EVENTOS MENU*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu-visible");
});

closeNav.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu-visible");
});

itemNav.forEach((n) => n.addEventListener("click", removeNav));
function removeNav() {
  navMenu.classList.remove("nav__menu-visible");
}

/*PETICIÓN A API GIPHY */

/*async function datos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}*/
/*INSTRUMENTOS DE PERCUSIÓN */
function callApi() {
  datePercussion(), 
  datos(), 
  dataWind(),
  dataElectronic()
}

function datePercussion() {
  fetch(percussion)
    .then((respuesta) => respuesta.json())
    .then((resultado) => seePercussion(resultado.data))
    .catch((error) => console.log(error));
}
function seePercussion(percussionData) {
  let giffHTML = "";
  percussionData.forEach((img) => {
    let giff = img.images.original.url; //EUREKAAAAAA

    giffHTML += `
       
            
       <div class="percussion__instruments--item">
            <img src="${giff}" loading="lazy" alt="giff">
            <a class="capaPercussion" href="/isntrumento.html" target="_blank" ></a>
               
           
       </div>
            
       
         
       `;
  });
  resultPercussion.innerHTML = giffHTML;
}

/*INSTRUMENTOS DE CUERDA */

function datos() {
  fetch(urlFull)
    .then((respuesta) => respuesta.json())
    .then((resultado) =>
      Seeimages(resultado.data)
    ) /*.data[0].images.original.url */
    .catch((error) => console.log(error));
}

function Seeimages(imagesData) {
  let giffHTML = "";
  imagesData.forEach((img) => {
    let giff = img.images.original.url; //EUREKAAAAAA

    giffHTML += `
       <div class="strings__instruments--item">
            
            <img src="${giff}" loading="lazy" alt="giff">
            <a class="capaStrings" href="/isntrumento.html" target="_blank" ></a>
        </div>  
       `;
  });
  contenido.innerHTML = giffHTML;
}

/*INSTRUMENTOS DE VIENTO */

function dataWind() {
  fetch(urlwind)
    .then((respuesta) => respuesta.json())
    .then((resultado) =>
      seeWind(resultado.data)
    ) /*.data[0].images.original.url */
    .catch((error) => console.log(error));
}
function seeWind(windData) {
  let giffHTML = "";
  windData.forEach((img) => {
    let giff = img.images.original.url; //EUREKAAAAAA

    giffHTML += `
                  
         <div class="wind__instruments--item">
            <img src="${giff}" loading="lazy" alt="giff">
            <a class="capaWind" href="/isntrumento.html" target="_blank" ></a>
        </div>
            
               
       `;
  });
  resultWind.innerHTML = giffHTML;
}

/*INSTRUMENTOS ELECTRONICOS */
function dataElectronic() {
    fetch(urlElectronic)
      .then((respuesta) => respuesta.json())
      .then((resultado) =>seeElectronic(resultado.data)
      ) 
      .catch((error) => console.log(error));
  }
  function seeElectronic(ElectronicData) {
    let giffHTML = "";
    ElectronicData.forEach((img) => {
      let giff = img.images.original.url; //EUREKAAAAAA
  
      giffHTML += `
                    
           <div class= "electronics__instruments--item">
              <img src="${giff}" loading="lazy" alt="giff">
              <a class="capaElectronics" href="/isntrumento.html" target="_blank" ></a>
          </div>
              
                 
         `;
    });
    resultElectronic.innerHTML = giffHTML;
  }