// Humberger munu

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
const Humberger = document.querySelector(".navbar-toggler");
const link = document.querySelector(".navbar-nav");

Humberger.addEventListener("click", function () {
  // document.body.style.paddingRight = "400px";
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  // document.body.style.paddingRight = "0";
  stickyTop.style.overflow = "hidden";
});

link.addEventListener("hidden.bs.offcanvas", function () {
  // alert("test");
  // document.body.style.paddingRight = "0";
  stickyTop.style.overflow = "hidden";
});

// DisableScroll
const rootElememt = document.querySelector(":root");
const audioIcon = document.querySelector(".audio-icon-wrapper");
let isPlaying = false;
const song = document.querySelector("#song");
const icon = document.querySelector(".audio-icon-wrapper i");

function DisableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElememt.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElememt.style.scrollBehavior = "smooth";
  playAudio();
  // localStorage.setItem("opened", "true");
}

// if (!localStorage.getItem("opened")) {
//   DisableScroll();
// }
DisableScroll();

function playAudio() {
  song.volume = 0.3;
  audioIcon.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIcon.onclick = function () {
  if (isPlaying) {
    song.pause();
    icon.classList.remove("bi-disc");
    icon.classList.add("bi-pause-circle");
  } else {
    icon.classList.add("bi-disc");
    icon.classList.remove("bi-pause-circle");
    song.play();
  }

  isPlaying = !isPlaying;
};

// url Data
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saundara/i,";

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama}`.replace(/ , $/, ",");

document.querySelector("#nama").value = nama;
