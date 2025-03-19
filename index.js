document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".caath");
    const images = document.querySelectorAll(".cath img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
  
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth;
  
    // Fonction pour mettre à jour le décalage du carrousel
    const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };
  
    // Bouton "Suivant"
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Revient au début après la dernière image
      updateCarousel();
    });
  
    // Bouton "Précédent"
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Revient à la fin si on dépasse le début
      updateCarousel();
    });
  });