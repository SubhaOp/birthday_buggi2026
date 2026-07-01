/* ==========================================
   Dream World Birthday Website
   effects.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const heartsContainer = document.querySelector(".hearts");
const particlesContainer = document.querySelector(".particles");

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

const size = Math.random()*20+12;

heart.style.width=size+"px";
heart.style.height=size+"px";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*5+8)+"s";

heart.style.opacity=Math.random();

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,600);

/* ==========================================
   SPARKLE PARTICLES
========================================== */

function createParticle(){

const particle=document.createElement("span");

particle.classList.add("spark");

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.animationDuration=
(Math.random()*3+2)+"s";

particlesContainer.appendChild(particle);

setTimeout(()=>{

particle.remove();

},5000);

}

setInterval(createParticle,250);

/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*40+"vh";

star.style.left="-200px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(shootingStar,7000);

/* ==========================================
   MOUSE GLOW
========================================== */

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ==========================================
   BUTTON GLOW
========================================== */

document.querySelectorAll("button")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.classList.add("glow");

});

btn.addEventListener("mouseleave",()=>{

btn.classList.remove("glow");

});

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll(

".photo-card,.timeline-item,.cake-img,.final-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:.2

});

reveals.forEach(item=>observer.observe(item));

});