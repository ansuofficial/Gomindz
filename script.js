// Get the elements
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navMenu = document.getElementById('nav-menu');
const toggleButtons = document.querySelector('.toggle__buttons');
const navList = document.querySelector('.nav__list'); // Add this line

// Add click event listeners
menuIcon.addEventListener('click', () => {
  navMenu.classList.add('show');
  menuIcon.classList.add('hidden');                                                                                                                
  closeIcon.classList.remove('hidden');
  navList.classList.add('show'); // Add this line
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.remove('show');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  navList.classList.remove('show'); // Add this line
});




let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});

