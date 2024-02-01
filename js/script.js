document.addEventListener('DOMContentLoaded', function() {
    // Minta input nama dari pengguna
    var userName = prompt("Please enter your name:");

    // Periksa apakah pengguna telah memasukkan nama
    if (userName !== null && userName.trim() !== '') {
        // Ubah teks "Hello User" menjadi "Hello [Nama Pengguna]"
        var greeting = document.querySelector('h4');
        greeting.textContent = "Hello " + userName + ", Let's Start Your Healthy Life!";
    }
});


let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[currentSlide].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide();
});

showSlide(); 

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".inquiry-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var interest = document.getElementById("interest").value;

        // Validasi
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
        }

        if (interest === "") {
            alert("Please select your interest.");
            return;
        }

        alert("Form submitted successfully!");
    });
});