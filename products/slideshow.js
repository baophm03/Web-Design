var slides = document.getElementsByClassName("slide");
var currentIndex = 0;
var autoSlideTimeout;

showSlides();

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  currentIndex++;

  if (currentIndex > slides.length) {
    currentIndex = 1;
  }

  slides[currentIndex - 1].style.display = "block";

  autoSlideTimeout = setTimeout(showSlides, 5000);
}

function prevSlide() {
  clearTimeout(autoSlideTimeout);

  slides[currentIndex - 1].style.display = "none";

  currentIndex--;

  if (currentIndex < 1) {
    currentIndex = slides.length;
  }

  slides[currentIndex - 1].style.display = "block";

  autoSlideTimeout = setTimeout(showSlides, 5000);

  isManualTransition = true;
}

function nextSlide() {
  clearTimeout(autoSlideTimeout);

  slides[currentIndex - 1].style.display = "none";

  currentIndex++;

  if (currentIndex > slides.length) {
    currentIndex = 1;
  }

  slides[currentIndex - 1].style.display = "block";

  autoSlideTimeout = setTimeout(showSlides, 5000);

  isManualTransition = true;
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);
