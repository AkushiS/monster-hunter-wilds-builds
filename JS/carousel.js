// Carrousel vidéos

const videoSlides = document.querySelectorAll(".video-slide");
const prevButton = document.querySelector(".video-button--prev");
const nextButton = document.querySelector(".video-button--next");

let currentVideo = 0;
let autoSlide;

// Mise à jour du carrousel

function updateVideoCarousel() {
  const totalVideos = videoSlides.length;

  // Angle entre chaque vidéo
  const angleStep = 360 / totalVideos;

  // Rayon du cercle selon la taille de l'écran ET le nombre de vidéos
  let radius;

  if (window.innerWidth <= 768) {
    // Mobile
    if (totalVideos <= 3) {
      radius = 150;
    } else if (totalVideos <= 6) {
      radius = 200;
    } else if (totalVideos <= 8) {
      radius = 250;
    } else if (totalVideos <= 10) {
      radius = 300;
    } else if (totalVideos <= 12) {
      radius = 325;
    } else if (totalVideos <= 14) {
      radius = 350;
    } else {
      radius = 375;
    }
  } else if (window.innerWidth <= 1440) {
    // Petit écran / petit laptop

    if (totalVideos <= 3) {
      radius = 250;
    } else if (totalVideos <= 6) {
      radius = 325;
    } else if (totalVideos <= 8) {
      radius = 375;
    } else if (totalVideos <= 10) {
      radius = 400;
    } else if (totalVideos <= 12) {
      radius = 450;
    } else if (totalVideos <= 14) {
      radius = 475;
    } else {
      radius = 500;
    }
  } else {
    // Grand écran
    if (totalVideos <= 3) {
      radius = 400;
    } else if (totalVideos <= 6) {
      radius = 450;
    } else if (totalVideos <= 8) {
      radius = 500;
    } else if (totalVideos <= 10) {
      radius = 550;
    } else if (totalVideos <= 12) {
      radius = 600;
    } else if (totalVideos <= 14) {
      radius = 650;
    } else {
      radius = 900;
    }
  }

  videoSlides.forEach((video, index) => {
    // Position de la vidéo par rapport au centre
    let position = index - currentVideo;

    // Permet de faire fonctionner le cercle
    // lorsqu'on passe de la dernière vidéo à la première
    if (position > totalVideos / 2) {
      position -= totalVideos;
    }

    if (position < -totalVideos / 2) {
      position += totalVideos;
    }

    // Angle de cette vidéo
    const angle = position * angleStep;

    // Conversion degrés → radians
    const radians = (angle * Math.PI) / 180;

    // Position horizontale
    const x = Math.sin(radians) * radius;

    // Position verticale
    const y = 0;

    // Rotation de la vidéo
    const rotation = angle * 0.5;

    // Échelle
    const scale = Math.max(0.65, 1 - Math.abs(position) * 0.12);

    // On place la vidéo
    video.style.transform = `
      translate(-50%, -50%)
      translate(${x}px, ${y}px)
      rotateY(${rotation}deg)
      scale(${scale})
    `;

    // Gestion de la visibilité

    if (position === 0) {
      // Centre
      video.style.opacity = "1";
      video.style.zIndex = "3";
      video.style.pointerEvents = "auto";
    } else if (Math.abs(position) === 1) {
      // Gauche ou droite
      video.style.opacity = "0.8";
      video.style.zIndex = "2";
      video.style.pointerEvents = "auto";
    } else {
      // Toutes les autres vidéos
      video.style.opacity = "0";
      video.style.zIndex = "1";
      video.style.pointerEvents = "none";
    }
  });
}

// Bouton suivant

nextButton.addEventListener("click", () => {
  currentVideo++;

  if (currentVideo >= videoSlides.length) {
    currentVideo = 0;
  }

  updateVideoCarousel();
});

// Bouton précédent

prevButton.addEventListener("click", () => {
  currentVideo--;

  if (currentVideo < 0) {
    currentVideo = videoSlides.length - 1;
  }

  updateVideoCarousel();
});

// Initialisation

if (videoSlides.length > 0) {
  updateVideoCarousel();

  autoSlide = setInterval(() => {
    currentVideo++;

    if (currentVideo >= videoSlides.length) {
      currentVideo = 0;
    }

    updateVideoCarousel();
  }, 5000);
}

function onYouTubeIframeAPIReady() {
  videoSlides.forEach((video) => {
    new YT.Player(video, {
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    clearInterval(autoSlide);
  }
}
