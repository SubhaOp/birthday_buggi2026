/* ==========================================
   Dream World Birthday Website
   gallery.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".photo-card");

let currentIndex = 0;

/* -----------------------------
   Create Lightbox
------------------------------*/

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-content">

<span class="close-lightbox">&times;</span>

<button class="prev">&#10094;</button>

<img id="lightbox-img" src="">

<button class="next">&#10095;</button>

<p id="caption"></p>

</div>

`;

document.body.appendChild(lightbox);

const img = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

const close = document.querySelector(".close-lightbox");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/* -----------------------------
   Open
------------------------------*/

function openGallery(index){

currentIndex=index;

const image=cards[index].querySelector("img");

img.src=image.src;

caption.textContent=

cards[index].querySelector("h3").innerText;

lightbox.classList.add("show");

}

/* -----------------------------
   Close
------------------------------*/

function closeGallery(){

lightbox.classList.remove("show");

}

/* -----------------------------
   Next
------------------------------*/

function nextImage(){

currentIndex++;

if(currentIndex>=cards.length){

currentIndex=0;

}

openGallery(currentIndex);

}

/* -----------------------------
   Previous
------------------------------*/

function previousImage(){

currentIndex--;

if(currentIndex<0){

currentIndex=cards.length-1;

}

openGallery(currentIndex);

}

/* -----------------------------
   Card Click
------------------------------*/

cards.forEach((card,index)=>{

card.addEventListener("click",()=>{

openGallery(index);

});

});

/* -----------------------------
   Buttons
------------------------------*/

close.addEventListener("click",closeGallery);

next.addEventListener("click",nextImage);

prev.addEventListener("click",previousImage);

/* -----------------------------
   Outside Click
------------------------------*/

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeGallery();

}

});

/* -----------------------------
   Keyboard
------------------------------*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("show")) return;

if(e.key==="Escape"){

closeGallery();

}

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

previousImage();

}

});

/* -----------------------------
   Mobile Swipe
------------------------------*/

let startX=0;

img.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

let diff=startX-endX;

if(diff>50){

nextImage();

}

if(diff<-50){

previousImage();

}

});

});