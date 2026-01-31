let menuBar = document.getElementById("menuBar");
let menu = document.getElementById("menu");
menuBar.addEventListener("click", (e) => {
    e.stopPropagation();
  menu.classList.toggle("hidden");
});

document.addEventListener("click", (e)=>{
    if(!menu.contains(e.target) && !menuBar.contains(e.target)){
        menu.classList.add("hidden");
    }
});

const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach((link) => {
    link.addEventListener("click", ()=>{
        menu.classList.add("hidden");
    })
});


 

