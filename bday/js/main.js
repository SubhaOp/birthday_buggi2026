/* ==========================================
   Dream World Birthday Website
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");

const intro = document.getElementById("intro");

const main = document.getElementById("main");

const enterBtn = document.getElementById("enterBtn");

const celebrateBtn = document.getElementById("celebrateBtn");

const modal = document.getElementById("letterModal");

const closeBtn = document.querySelector(".close");

const galleryBtn = document.getElementById("galleryOpen");

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("music");

const typing = document.querySelector(".typing");

const restart = document.getElementById("restart");

/* ==========================================
   Loading Screen
========================================== */

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},1000);

},4000);

/* ==========================================
   Enter Dream World
========================================== */

enterBtn.addEventListener("click",()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

main.style.display="block";

window.scrollTo(0,0);

},800);

music.play();

musicBtn.innerHTML="<i class='fa-solid fa-pause'></i>";

});

/* ==========================================
   Music Player
========================================== */

let playing=true;

musicBtn.addEventListener("click",()=>{

if(playing){

music.pause();

musicBtn.innerHTML="<i class='fa-solid fa-music'></i>";

}else{

music.play();

musicBtn.innerHTML="<i class='fa-solid fa-pause'></i>";

}

playing=!playing;

});

/* ==========================================
   Typewriter
========================================== */

const message=

"Every moment with you is my favourite memory. Thank you for making life beautiful. Today is your day, and I hope it becomes as wonderful as your smile ❤️";

let index=0;

function typeWriter(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeWriter,40);

}

}

setTimeout(typeWriter,5200);

/* ==========================================
   Celebrate Button
========================================== */

celebrateBtn.addEventListener("click",()=>{

modal.style.display="flex";

confetti({

particleCount:250,

spread:120,

origin:{y:0.2}

});

});

/* ==========================================
   Close Modal
========================================== */

closeBtn.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

/* ==========================================
   Gallery Button
========================================== */

galleryBtn.addEventListener("click",()=>{

modal.style.display="none";

document.getElementById("gallery")

.scrollIntoView({

behavior:"smooth"

});

});

/* ==========================================
   Restart Website
========================================== */

restart.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

setTimeout(()=>{

location.reload();

},800);

});
/* ==========================================
   Interactive Birthday Cake
========================================== */

const wishBtn = document.getElementById("wishBtn");

const flames = document.querySelectorAll(".flame");

const wishText = document.getElementById("wishText");

const cake = document.getElementById("cakeImage");

wishBtn.addEventListener("click",()=>{

wishBtn.disabled=true;

wishBtn.innerHTML="✨ Wish Made ❤️";

flames.forEach((flame,index)=>{

setTimeout(()=>{

flame.style.display="none";

const smoke=document.createElement("div");

smoke.className="smoke";

flame.parentElement.appendChild(smoke);

},index*300);

});

setTimeout(()=>{

cake.style.transition="1s";

cake.style.transform="scale(1.08)";

confetti({

particleCount:500,

spread:180,

origin:{y:.65}

});

},1700);

setTimeout(()=>{

wishText.innerHTML=`

🎉 Happy Birthday Buggi ❤️

<br><br>

May every dream you have
come true.

<br><br>

Stay happy,
keep smiling,
and never stop being
the wonderful person you are.
❤️❤️❤️

`;

wishText.classList.add("fade-up");

},2200);

createBalloons();

});

function createBalloons(){

for(let i=0;i<25;i++){

const balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-50px";

balloon.style.fontSize=(25+Math.random()*30)+"px";

balloon.style.zIndex="99999";

document.body.appendChild(balloon);

balloon.animate([

{

transform:"translateY(0)"

},

{

transform:`translateY(-${window.innerHeight+300}px)`

}

],{

duration:6000+Math.random()*3000,

iterations:1

});

setTimeout(()=>{

balloon.remove();

},9000);

}

}

});