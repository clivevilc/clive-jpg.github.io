// Video Intro
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0.4,
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 80);

// Navbar Animation

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 9500) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// aboutMe carousel

var myCarousel = document.querySelector("#aboutme-carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: true,
  pause: "hover",
});

// Contact

var infoWindow = new SnazzyInfoWindow({
  marker: marker,
  content: "Snazzy!",
});
