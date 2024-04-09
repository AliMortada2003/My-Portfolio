// ======================= scroll section active links ========================= 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offest = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offest&&top<offest+height){
            navLinks.forEach(links =>  {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    });
//=========== wehen I scrolling give atributr stiky to header =========
    let header = document.querySelector(".header");
    if(window.scrollY>100){
        header.classList.add("stiky");
        
    }else{
        header.classList.remove("stiky");
    }

//======= when I scrolling side my menu ==================
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};
// =========== show menu icon and navbar ===================
let menu = document.getElementById("menu-icons");
let navbar = document.querySelector(".navbar");
menus = function(){
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
/*======================= scrollrevals ===================*/
ScrollReveal({ 
    reset : true,
    distance : '80px',
    duration : 1000,
    delay : 100 ,
});
ScrollReveal().reveal('.home-content , .heading , .footer-icon-top a', {origin:'top'});
ScrollReveal().reveal('.home-imge ,.services-container , .portfolio-container , .contact form', {origin:'bottom'});
ScrollReveal().reveal('.btn  ,.home-content h1', {origin:'left'});
ScrollReveal().reveal('.about-content p', {origin:'left'});

/*========================= Typed js =======================*/
const typed = new Typed(".Muliaple-text", {
    strings: ["Front End Developer!","Graphic Design!","Front End Developer!"],
    backDelay:100,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
});
alerts = function(){
    alert("wait This Project will be active soon !!")
}


