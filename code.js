// show menu

let navMenu=document.getElementById("nav-menu"),
    navToggle=document.getElementById("nav-toggle"),
    navClose=document.getElementById("nav-close");

// Menu show
// validate if constant exist

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    });
}

// Menu hidden
// validate if constant exist
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    });
}


// Remove menu mobile
let navLink=document.querySelectorAll(".nav__link");

let linkAction=()=>{
    let navMenu=document.getElementById("nav-menu");
    // when we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove("show-mwnu");
}
navLink.forEach(n=> n.addEventListener("click",linkAction));


// shadow header
let shadowHeader=()=>{
    let header=document.getElementById("header");
    this.scrollY >=50 ?   header.classList.add("shadow-header")
                        : header.classList.remove("shadow-header");
}
window.addEventListener("scroll",shadowHeader);

// Email handler
let contactForm=document.getElementById("contact-form");
let contactMessage=document.getElementById("contact-message");

let sendEmail=(e)=>{
    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_br8u2z1','template_sjk9aca','#contact-form','nr33aMMsu2LnadeMG')
    .then(()=>{
        // show sent message
        contactMessage.textContent='Message sent succesfully ✅';

        // remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent='';
        },5000)

        // clear input fields
        contactForm.reset();
    }, ()=> {
        // show error message
        contactMessage.textContent='Message not sent (service error) ❌';
    });
}

contactForm.addEventListener("submit",sendEmail);

// Scroll up
let scrollUp=()=>{
    let scrollUp=document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                                            : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",scrollUp);

// Scroll section active link
let sections=document.querySelectorAll("section[id]");

let scrollActive=()=>{
    let scrollDown=window.scrollY;

    sections.forEach(current=>{
        let sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute("id"),
            sectionClass=document.querySelector(".nav__menu a[href*="+sectionId+"]");

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link");
        }else{
            sectionClass.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll",scrollActive);

// Dark light theme
let themeButton=document.getElementById("theme-button");
let darkTheme="dark-theme";
let iconTheme="ri-sun-line";

let selectedTheme=localStorage.getItem("selected-theme");
let selectedIcon=localStorage.getItem("selected-icon");

let getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? "dark" : "light";
let getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if(selectedTheme){
    document.body.classList[selectedTheme=== "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon==="ri-moon-line" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click",()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme",getCurrentTheme());
    localStorage.setItem("selected-icon",getCurrentIcon());
});


// Scroll reveal animation
let sr=ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`,{origin: 'right'});
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`,{origin: 'left'});
sr.reveal(`.services__card, .projects__card`,{interval: 100});