const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.main-header');
const navbar = document.querySelector('.navbar');

// Update navbar position based on scroll
function updateNavbarPosition() {
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight) {
    navbar.style.top = '0px'; // Move navbar to top when header is out of view
  } else {
    navbar.style.top = `${headerHeight}px`; // Keep navbar below header
  }
}

// Set navbar position on load, resize, and scroll
window.addEventListener('load', updateNavbarPosition);
window.addEventListener('resize', updateNavbarPosition);
window.addEventListener('scroll', updateNavbarPosition);

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.menu ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('active')) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(() => showSlides(slideIndex + 1), 5000);
}

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.about, .vision-mission, .team, .contact');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
