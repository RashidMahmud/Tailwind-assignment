
document.documentElement.classList.remove("dark");
document.getElementById("switch").addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

const animation = ScrollReveal({
  distance: '30px',
  duration: 1500,  
  delay: 400,
  reset: true
});

animation.reveal('.hero_content, .heroimage, .herobtn, .hero_reviews, .brooke', {
  delay: 200,
  origin: 'bottom'
});

animation.reveal('.brands, .five_courses, .footer', {
  delay: 200,
  origin: 'top'
});

animation.reveal('.ani_left', {
  delay: 200,
  origin: 'left'
});

animation.reveal('.ani_right', {
  delay: 200,
  origin: 'right'
});

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});





