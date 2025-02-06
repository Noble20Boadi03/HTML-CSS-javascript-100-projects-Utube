let currentSlide = 0;

function updateCarousel() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Show the current slide
  slides[currentSlide].classList.add('active');

  // Update the transform property for smooth transition
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + 1) % slides.length; // Loop to first slide after the last
  updateCarousel();
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to last slide before the first
  updateCarousel();
}

// Initialize the carousel on page load
updateCarousel();
