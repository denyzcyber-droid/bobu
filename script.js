// =========================
// BOBU V4
// script.js
// =========================


// Scroll Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});



// Navbar Active Link

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



// Hero Floating Effect

const hero=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

hero.style.transform=`translate(${x}px,${y}px)`;

});



// Button Hover Glow

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px rgba(176,108,255,.8)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});



// Scroll To Top

const topButton=document.createElement("div");

topButton.innerHTML="⬆";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// Console

console.log("👾 Welcome To BOBU");
