/* ==========================================
   Dream World Birthday Website
   music.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const audio = document.getElementById("music");

/* =========================
   CREATE PLAYER
========================= */

const player = document.createElement("div");

player.className = "music-player";

player.innerHTML = `

<div class="album">

<i class="fa-solid fa-heart"></i>

</div>

<div class="music-info">

<h4>Birthday Song</h4>

<span>Playing For You ❤️</span>

<div class="progress-area">

<div class="progress-bar"></div>

</div>

</div>

<div class="controls">

<button id="playPause">

<i class="fa-solid fa-pause"></i>

</button>

</div>

`;

document.body.appendChild(player);

/* =========================
   PLAY / PAUSE
========================= */

const playBtn = document.getElementById("playPause");

let playing = true;

playBtn.addEventListener("click",()=>{

if(playing){

audio.pause();

playBtn.innerHTML=

"<i class='fa-solid fa-play'></i>";

player.classList.remove("playing");

}else{

audio.play();

playBtn.innerHTML=

"<i class='fa-solid fa-pause'></i>";

player.classList.add("playing");

}

playing=!playing;

});

/* =========================
   PROGRESS BAR
========================= */

audio.addEventListener("timeupdate",()=>{

const percent=

(audio.currentTime/audio.duration)*100;

const bar=

player.querySelector(".progress-bar");

if(percent){

bar.style.width=percent+"%";

}

});

/* =========================
   AUTO PLAY
========================= */

audio.addEventListener("play",()=>{

player.classList.add("playing");

});

audio.addEventListener("pause",()=>{

player.classList.remove("playing");

});

/* =========================
   VOLUME
========================= */

const volume=document.createElement("input");

volume.type="range";

volume.min=0;

volume.max=1;

volume.step=.01;

volume.value=.8;

volume.className="volume-slider";

player.appendChild(volume);

audio.volume=.8;

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

/* =========================
   EQUALIZER
========================= */

const equalizer=document.createElement("div");

equalizer.className="equalizer";

equalizer.innerHTML=`

<span></span>

<span></span>

<span></span>

<span></span>

<span></span>

`;

player.querySelector(".album")

.appendChild(equalizer);

});