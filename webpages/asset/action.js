//nav bar function
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// slider function
let slideIndex = 0;
const slides = document.querySelectorAll('.single-slider');
const totalSlides = slides.length;

// Function to show the next slide
function nextSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % totalSlides; // Loop back to first slide
  slides[slideIndex].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000); // Change slide every 5000ms (5 seconds)
