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
const rootElememt = document.querySelector(":root");
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

  localStorage.setItem("opened", "true");
}

if (!localStorage.getItem("opened")) {
  DisableScroll();
}
// DisableScroll();
