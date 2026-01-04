/* =========================
   HERO SLIDER
========================= */
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 5000);

/* =========================
   WELCOME SLIDE REMOVE
========================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    const welcome = document.getElementById("welcomeSlide");
    if (welcome) welcome.style.display = "none";
  }, 3000);
});
// JavaScript for floating ingredients
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(img) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 40 + 20;
    this.speedY = Math.random() * 1 + 0.2;
    this.img = img;
  }
  update() {
    this.y += this.speedY;
    if (this.y > canvas.height) this.y = -this.size;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}

const ingredientImages = ["img/pepper.png","img/tomato.png","img/fork.png"]; // your icons
const images = [];
ingredientImages.forEach(src => {
  const img = new Image();
  img.src = src;
  images.push(img);
});

const particles = [];
for(let i=0; i<20; i++){
  const randomImg = images[Math.floor(Math.random()*images.length)];
  particles.push(new Particle(randomImg));
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
