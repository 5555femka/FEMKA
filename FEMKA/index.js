// script.js

window.addEventListener('scroll', function() {
    const image = document.querySelector('.fixed-image');
    const scrollY = window.scrollY;   // Nuvarande scrollposition
    const triggerPoint = 1000;         // Punkt hvor billedet skal vises (i px)

    if (scrollY > triggerPoint) {
        image.classList.add('visible');   // Tilføj klassen for at vise billedet
    } else {
        image.classList.remove('visible'); // Fjern klassen for at skjule billedet
    }
});
