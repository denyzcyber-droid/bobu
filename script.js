// BOBU Website Script 👾

console.log("BOBU Galaxy Loaded 🚀");


// Button glow effect

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {


button.addEventListener("mouseenter",()=>{


button.style.boxShadow =
"0 0 30px #00ffff";


});



button.addEventListener("mouseleave",()=>{


button.style.boxShadow =
"none";


});


});





// Scroll reveal animation


const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.15

}

);




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .8s ease";


observer.observe(card);


});






// BOBU secret interaction


const bobu =
document.querySelector(".character img");


let bobuClicks = 0;



if(bobu){


bobu.addEventListener("click",()=>{


bobuClicks++;



if(bobuClicks === 5){


alert(
"👾 Secret BOBU Power Activated 🌈🚀"
);


bobuClicks=0;


}



});


}






// Current year footer update


const year =
document.querySelector("footer p");


if(year){

year.innerHTML =
"👾 BOBU © " + new Date().getFullYear();

}




iPhone’umdan gönderildi

> Mehmet Ali TOPAL <dr_mtopal@hotmail.com> şunları yazdı (16.7.2026 00:52):
>
> ﻿
> *{
> box-sizing:border-box;
> }
>
> html{
> scroll-behavior:smooth;
> }
>
> body{
>
> margin:0;
> font-family:Arial, Helvetica, sans-serif;
> color:white;
>
> background:
> linear-gradient(135deg,#12002b,#4b0082,#001f3f);
>
> overflow-x:hidden;
>
> }
>
>
>
> /* Animated background */
>
> .stars{
>
> position:fixed;
> top:0;
> left:0;
> width:100%;
> height:100%;
>
> background-image:
> radial-gradient(circle,rgba(255,255,255,.35) 1px,transparent 1px);
>
> background-size:45px 45px;
>
> animation:starsMove 25s linear infinite;
>
> z-index:-1;
>
> }
>
>
> @keyframes starsMove{
>
> from{
> transform:translateY(0);
> }
>
> to{
> transform:translateY(-300px);
> }
>
> }
>
>
>
>
> /* Header */
>
>
> header{
>
> padding:25px;
>
> }
>
>
> nav{
>
> max-width:1200px;
>
> margin:auto;
>
> display:flex;
>
> justify-content:space-between;
>
> align-items:center;
>
> }
>
>
>
> .logo{
>
> font-size:35px;
>
> font-weight:900;
>
> }
>
>
>
> .nav-links a{
>
> color:white;
>
> text-decoration:none;
>
> margin-left:20px;
>
> font-weight:bold;
>
> }
>
>
>
>
> /* Hero */
>
>
> .hero{
>
> max-width:1200px;
>
> margin:auto;
>
> padding:80px 20px;
>
> display:flex;
>
> align-items:center;
>
> justify-content:space-between;
>
> gap:40px;
>
> }
>
>
>
> .hero-text{
>
> max-width:600px;
>
> }
>
>
>
> .hero h1{
>
> font-size:100px;
>
> margin:0;
>
> background:linear-gradient(90deg,#ff00cc,#00ffff);
>
> -webkit-background-clip:text;
>
> color:transparent;
>
> }
>
>
>
> .hero h2{
>
> font-size:35px;
>
> }
>
>
>
> .hero p{
>
> font-size:22px;
>
> line-height:1.6;
>
> }
>
>
>
>
> /* BOBU */
>
>
> .character img{
>
> width:380px;
>
> max-width:90%;
>
> filter:
> drop-shadow(0 0 40px #00ffff);
>
> animation:
>
> float 4s ease-in-out infinite;
>
> }
>
>
>
> @keyframes float{
>
>
> 0%,100%{
>
> transform:translateY(0);
>
> }
>
>
> 50%{
>
> transform:translateY(-25px);
>
> }
>
>
> }
>
>
>
>
>
> /* Buttons */
>
>
> .buttons{
>
> margin-top:30px;
>
> }
>
>
> .btn{
>
> display:inline-block;
>
> padding:15px 28px;
>
> margin:8px;
>
> border-radius:50px;
>
> color:white;
>
> text-decoration:none;
>
> font-weight:bold;
>
> background:#ffffff20;
>
> border:1px solid #ffffff55;
>
> transition:.3s;
>
> }
>
>
>
> .btn:hover{
>
> transform:scale(1.08);
>
> background:white;
>
> color:#6500ff;
>
> box-shadow:
>
> 0 0 25px #00ffff;
>
> }
>
>
>
> .primary{
>
> background:
>
> linear-gradient(90deg,#ff00cc,#6600ff);
>
> }
>
>
>
>
>
> /* Cards */
>
>
> .card{
>
> max-width:900px;
>
> margin:40px auto;
>
> padding:35px;
>
> background:
>
> rgba(255,255,255,.12);
>
> border-radius:25px;
>
> border:
>
> 1px solid rgba(255,255,255,.25);
>
> backdrop-filter:blur(12px);
>
> }
>
>
>
> .card h2{
>
> font-size:35px;
>
> }
>
>
>
> .card p{
>
> font-size:20px;
>
> line-height:1.7;
>
> }
>
>
>
>
>
> /* Features */
>
>
> .features{
>
> max-width:1100px;
>
> margin:auto;
>
> display:flex;
>
> gap:20px;
>
> padding:20px;
>
> }
>
>
> .features .card{
>
> flex:1;
>
> }
>
>
>
>
>
> /* Footer */
>
>
> footer{
>
> text-align:center;
>
> padding:50px;
>
> font-size:18px;
>
> }
>
>
>
>
> /* Mobile */
>
>
> @media(max-width:800px){
>
>
> .hero{
>
> flex-direction:column;
>
> text-align:center;
>
> }
>
>
> .hero h1{
>
> font-size:65px;
>
> }
>
>
>
> .hero h2{
>
> font-size:25px;
>
> }
>
>
>
> .nav-links{
>
> display:none;
>
> }
>
>
>
> .features{
>
> flex-direction:column;
>
> }
>
>
>
> .character img{
>
> width:280px;
>
> }
>
>
> }
>
