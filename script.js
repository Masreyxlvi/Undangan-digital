// Humberger munu

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
const Humberger = document.querySelector(".navbar-toggler");

Humberger.addEventListener("click", function () {
  // document.body.style.paddingRight = "400px";
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  // document.body.style.paddingRight = "0";
  stickyTop.style.overflow = "hidden";
});

// DisableScroll
scrollTop = window.padeYOffset;
