let colour = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let spalva = "#123456";
let fonas = document.getElementById("fonas");
fonas.addEventListener("click", function(){
    spalva = "#";
    for(let i = 0; i < 6; i++){
        spalva += colour[Math.floor(Math.random()*colour.length)];
    };
    console.log(spalva);
    
   document.body.style.backgroundColor = spalva; 
});


let MC = document.querySelector(".cursor");
let MC2 = document.querySelector(".cursor2");
let L = document.querySelectorAll(".klase");

window.addEventListener('mousemove', cursor);

function cursor(e){
    MC.style.top = e.pageY + 8 + 'px';
    MC.style.left = e.pageX + 8 + 'px';
    
     
    MC2.style.top = e.pageY + 'px';
    MC2.style.left = e.pageX + 'px';
}



//L.forEach(link => {
//    link.addEventListener("mouseleave", () => {
//        MC2.classList.remove("link-grow");
//    });
//    link.addEventListener("mouseover", () => {
//        MC2.classList.add("link-grow");
//    });
//});

let btnP = document.getElementById("btnP");
let btnR = document.getElementById("btnR");
let btnN = document.getElementById("btnN");
let foto = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
let counter = 0;

let mygtukaiPRN = document.querySelector(".mygtukaiPRN");
let myImg = document.getElementById("myImg");

btnN.addEventListener("click", function(){
    counter++;
    myImg.src = foto[counter];
    if(counter == foto.length){counter=0;}
});
btnP.addEventListener("click", function(){
    counter--;
    myImg.src = foto[counter];
    if(counter < 0){counter=foto.length - 1;}
});
btnR.addEventListener("click", function(){
    counter=Math.floor(Math.random()*foto.length);
    myImg.src = foto[counter];
    console.log(counter);
});
