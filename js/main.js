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



L.forEach(link => {
    link.addEventListener("mouseleave", () => {
        MC2.classList.remove("link-grow");
    });
    link.addEventListener("mouseover", () => {
        MC2.classList.add("link-grow");
    });
});