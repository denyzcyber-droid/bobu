// 👾 BOBU V3 Website Script


console.log("🚀 Welcome to BOBU Galaxy");




// Button animation

const buttons = document.querySelectorAll(".btn");


buttons.forEach((button)=>{


button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});



button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});


});






// Scroll reveal


const cards = document.querySelectorAll(".card");



const reveal = new IntersectionObserver((entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},{

threshold:0.15

});





cards.forEach((card)=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="all .8s ease";


reveal.observe(card);


});







// BOBU Secret Easter Egg 👾


const bobu = document.querySelector(".character img");


let clicks = 0;



if(bobu){


bobu.addEventListener("click",()=>{


clicks++;



if(clicks === 5){


alert(

"👾 BOBU SECRET POWER ACTIVATED 🌈🚀\nWelcome Bobonaut!"

);


clicks = 0;


}



});


}







// Dynamic footer year


const footer = document.querySelector("footer p");


if(footer){


footer.innerHTML =

"👾 BOBU © " + new Date().getFullYear();


}

