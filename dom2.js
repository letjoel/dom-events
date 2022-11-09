const headerH1 = document.querySelector("Header h1");
const header = document.querySelector("Header");
const main = document.querySelector("Main");
const mainH1 = document.querySelector("Main h1");
const section = document.querySelector("Section");
const sectionH1 = document.querySelector("Section h1");
const article1 = document.querySelector("#article1");
const article2 = document.querySelector("#article2");
const articleH1 = document.querySelector("#PrimerH1");
const articleP = document.querySelector("#PrimerP");
const articleH1_2 = document.querySelector("#SegundoH1");
const articleP_2 = document.querySelector("#SegundoP");

//------------ Eventos de Mouse

header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'orange';
})
header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '#a1a0a0';
})



// header.onmouseover = () => {
//     header.style.backgroundColor = 'orange';
// };
// header.onmouseout = () => {
//     header.style.backgroundColor = '#a1a0a0';
// };







//------------ Bubbling y ejemplo de No delegation
//Se puede agregar un .stopPropagation();

// header.addEventListener("click", () => {
//     console.log("Click en Header");
//     header.style.backgroundColor = "teal";
// });
// headerH1.addEventListener("click", () => {
//     console.log("Click en H1 del Header");
//     headerH1.style.backgroundColor = "teal";
// });
// main.addEventListener("click", () => {
//     console.log("Click en Main");
//     main.style.backgroundColor = "teal";
// });
// mainH1.addEventListener("click", (evento) => {
//     evento.stopPropagation();
//     console.log("Click en H1 del Main");
//     mainH1.style.backgroundColor = "teal";
// });
// section.addEventListener("click", () => {
//     console.log("Click en Section");
//     section.style.backgroundColor = "teal";
// });
// sectionH1.addEventListener("click", () => {
//     console.log("Click en H1 del Section");
//     sectionH1.style.backgroundColor = "teal";
// });
// article1.addEventListener("click", () => {
//     console.log("Click en Article Número 1");
//     article1.style.backgroundColor = "teal";
// });
// article2.addEventListener("click", () => {
//     console.log("Click en Article Número 2");
//     article2.style.backgroundColor = "teal";
// });
// articleH1.addEventListener("click", () => {
//     console.log("Click en H1 del Article");
//     articleH1.style.backgroundColor = "teal";
// });
// articleP.addEventListener("click", () => {
//     console.log("Click en el P de Article");
//     articleP.style.backgroundColor = "teal";
// });
// articleH1_2.addEventListener("click", () => {
//     console.log("Click en H1 del Article");
//     articleH1_2.style.backgroundColor = "teal";
// });
// articleP_2.addEventListener("click", () => {
//     console.log("Click en el P de Article");
//     articleP_2.style.backgroundColor = "teal";
// });



//------------ Delegation

// section.addEventListener("click", e => {
//     console.log(e.target); 
// })


// section.addEventListener("click", e => {
//     if (e.target.id == 'PrimerH1') {
//         console.log('Hiciste click en el Primer H1')
//     }
//     if (e.target.id == 'SegundoH1') {
//         console.log('Hiciste click en el Segundo H1')
//     }
//     if (e.target.id == 'PrimerP') {
//         console.log('Hiciste click en el Primer P')
//     }
//     if (e.target.id == 'SegundoP') {
//         console.log('Hiciste click en el Segundo P')
//     }
// })



