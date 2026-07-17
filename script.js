/ ===============================
// BOBU WEBSITE V7
// script.js
// ===============================

// Navbar küçülme efekti

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 80){

header.style.padding = "0px";
header.style.background = "rgba(8,10,20,.96)";
header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.padding = "";
header.style.background = "rgba(9,10,20,.85)";
header.style.boxShadow = "none";

}

});

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".section,.card,.road-card,.faq-item").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Hero Floating Glow

const heroImage=document.querySelector(".hero-right img");

let angle=0;

setInterval(()=>{

angle+=0.02;

heroImage.style.transform=`translateY(${Math.sin(angle)*10}px)`;

},20);

// Random Shooting Stars

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="3px";

star.style.height="3px";

star.style.background="#fff";

star.style.boxShadow="0 0 12px white";

star.style.top=Math.random()*window.innerHeight+"px";

star.style.left=window.innerWidth+"px";

star.style.zIndex="-1";

document.body.appendChild(star);

let x=window.innerWidth;

let y=parseFloat(star.style.top);

const timer=setInterval(()=>{

x-=18;

y+=6;

star.style.left=x+"px";

star.style.top=y+"px";

if(x<-50){

clearInterval(timer);

star.remove();

}

},16);

}

setInterval(shootingStar,5000);

// Logo Easter Egg

let clicks=0;

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("click",()=>{

clicks++;

if(clicks===10){

alert("👾 Secret Transmission Unlocked!\n\nWelcome OG Bobonaut.");

clicks=0;

}

});

}

// Console Message

console.log("%c👾 BOBU GALAXY","font-size:26px;color:#7B3FE4;font-weight:bold;");

console.log("Born Among Stars.");
console.log("Built by Memes.");
console.log("Powered by Community.");
