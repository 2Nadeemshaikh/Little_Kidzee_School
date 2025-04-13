let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides(); // Initial call to start the slideshow
});



// 2nd slideshow
let slideIndex1 = 0;

function showSlide(n) {
    let slides = document.getElementsByClassName("mySlides1");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex1 = (n + slides.length) % slides.length;
    slides[slideIndex1].style.display = "block";
}

function nextSlide() {
    showSlide(slideIndex1 + 1);
}

function prevSlide() {
    showSlide(slideIndex1 - 1);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(slideIndex1); // Initial call to display the first slide

    // Event listeners for next and previous buttons
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});

