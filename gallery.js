/* ==========================================================
   PREMIUM GALLERY
   PART 1
   - Gallery Data
   - Infinite Marquee
   - Reveal Animation
========================================================== */

"use strict";

/* ==========================================================
   SERVICES
========================================================== */

const services = [
  {
    title: "Couvertures",
    titleAr: "بطانيات",
    image: "images/Couverture.png",
    category: "Home",
  },

  {
    title: "Salons et Oreillers",
    titleAr: "أغطية الصالون والوسائد",
    image: "images/Salon.png",
    category: "Home",
  },

  {
    title: "Bourabah",
    titleAr: "بورابح",
    image: "images/Bourabah.png",
    category: "Home",
  },

  {
    title: "Rideaux",
    titleAr: "ستائر",
    image: "images/Rideaux.png",
    category: "Home",
  },

  {
    title: "Lhifats",
    titleAr: "لحيفات",
    image: "images/Lhaf.png",
    category: "Home",
  },

  {
    title: "Couettes",
    titleAr: "ألحفة",
    image: "images/Couette.png",
    category: "Home",
  },

  {
    title: "Corbeille de vêtements",
    titleAr: "سلة الملابس",
    image: "images/Corbeille.png",
    category: "Clothes",
  },

  {
    title: "Tapis",
    titleAr: "سجاد",
    image: "images/Tapis.png",
    category: "Home",
  },

  {
    title: "Draps",
    titleAr: "ملاءات",
    image: "images/Draps.png",
    category: "Home",
  },

  {
    title: "Vestes",
    titleAr: "معطف",
    image: "images/Veste.png",
    category: "Clothes",
  },

  {
    title: "Descentes de lit",
    titleAr: "سجادة السرير",
    image: "images/Descente.png",
    category: "Home",
  },

  {
    title: "Vestes cuire",
    titleAr: "معطف جلدي",
    image: "images/Veste_cuire.png",
    category: "Clothes",
  },

  {
    title: "Costumes",
    titleAr: "بدلات رجالية",
    image: "images/Costumes.png",
    category: "Clothes",
  },

  {
    title: "Espadrilles",
    titleAr: "أحذية رياضية",
    image: "images/shoes.png",
    category: "Shoes",
  },

  {
    title: "Djellaba Homme",
    titleAr: "جلابة رجالية",
    image: "images/Djellaba_H.png",
    category: "Traditional",
  },

  {
    title: "Djellaba Femme",
    titleAr: "جلابة نسائية",
    image: "images/Djellaba_F.png",
    category: "Traditional",
  },

  {
    title: "Quamiss",
    titleAr: "قميص تقليدي",
    image: "images/Quamiss.png",
    category: "Traditional",
  },

  {
    title: "Pantalons",
    titleAr: "سراويل",
    image: "images/Pantalon.png",
    category: "Clothes",
  },

  {
    title: "Chemises",
    titleAr: "قمصان",
    image: "images/shirts.png",
    category: "Clothes",
  },

  {
    title: "Pulls",
    titleAr: "كنزات",
    image: "images/Pull.png",
    category: "Clothes",
  },

  {
    title: "Survetements",
    titleAr: "لباس رياضي",
    image: "images/Survetement.png",
    category: "Clothes",
  },

  {
    title: "Jabador",
    titleAr: "جبادور",
    image: "images/Jabador.png",
    category: "Traditional",
  },

  {
    title: "Caftan",
    titleAr: "قفطان",
    image: "images/Caftan.png",
    category: "Traditional",
  },

  {
    title: "Robe Blanche",
    titleAr: "فستان زفاف",
    image: "images/Robe_B.png",
    category: "Traditional",
  },

  {
    title: "Karakou",
    titleAr: "كاراكو",
    image: "images/Karako.png",
    category: "Traditional",
  },

  {
    title: "Blouza Mensouj",
    titleAr: "بلوزة منسوج",
    image: "images/Blouza.png",
    category: "Traditional",
  },
];

/* ==========================================================
   LANGUAGE HELPER
   window.currentLang is set by the inline i18n script in the
   HTML page. Defaults to "fr" if that script hasn't run yet.
========================================================== */

function serviceTitle(service) {
  return window.currentLang === "ar" && service.titleAr
    ? service.titleAr
    : service.title;
}
/* ==========================================================
   ELEMENTS
========================================================== */

const marqueeTrack = document.getElementById("marqueeTrack");

/* ==========================================================
   CREATE CARD
========================================================== */

function createCard(service) {
  const card = document.createElement("article");

  card.className = "service-card";

  const label = serviceTitle(service);

  card.innerHTML = `

        <div class="card-image">

            <img
                src="${service.image}"
                alt="${label}"
                loading="lazy"
                width="280"
                height="240">

        </div>

        <h3>${label}</h3>

    `;

  return card;
}

/* ==========================================================
   BUILD MARQUEE
========================================================== */

function buildMarquee() {
  marqueeTrack.innerHTML = "";

  services.forEach((service) => {
    marqueeTrack.appendChild(createCard(service));
  });

  /* Duplicate pour une boucle infinie */

  services.forEach((service) => {
    marqueeTrack.appendChild(createCard(service));
  });
}

buildMarquee();

/* ==========================================================
   REVEAL ON SCROLL
========================================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  { threshold: 0.15 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

/* ==========================================================
   HOVER PAUSE
========================================================== */

const marquee = document.querySelector(".marquee");

marquee.addEventListener("mouseenter", () => {
  marqueeTrack.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", () => {
  marqueeTrack.style.animationPlayState = "running";
});

/* ==========================================================
   PART 2
   MODAL + FILTERS + GALLERY
========================================================== */

const galleryModal = document.getElementById("galleryModal");

const openGalleryBtn = document.getElementById("openGalleryBtn");

const closeGallery = document.getElementById("closeGallery");

const galleryGrid = document.getElementById("galleryGrid");

const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilteredServices = services;

let currentGalleryFilter = "All";

/* ==========================================================
   BUILD GALLERY
========================================================== */

function buildGallery(filter = "All") {
  galleryGrid.innerHTML = "";

  currentGalleryFilter = filter;

  const filteredServices =
    filter === "All"
      ? services
      : services.filter((service) => service.category === filter);

  currentFilteredServices = filteredServices;

  filteredServices.forEach((service, index) => {
    const figure = document.createElement("figure");

    figure.className = "gallery-item";

    figure.dataset.index = index;

    figure.dataset.category = service.category;

    const label = serviceTitle(service);

    figure.innerHTML = `

            <img

                src="${service.image}"

                alt="${label}"

                loading="lazy"

                class="gallery-image"

            >

        `;

    galleryGrid.appendChild(figure);
  });
}

/* ==========================================================
   OPEN MODAL
========================================================== */

function openGallery() {
  buildGallery(currentGalleryFilter);

  galleryModal.classList.add("show");

  document.body.style.overflow = "hidden";
}

/* ==========================================================
   CLOSE MODAL
========================================================== */

function closeGalleryModal() {
  galleryModal.classList.remove("show");

  document.body.style.overflow = "";
}

/* ==========================================================
   EVENTS
========================================================== */

openGalleryBtn.addEventListener(
  "click",

  openGallery,
);

closeGallery.addEventListener(
  "click",

  closeGalleryModal,
);

/* Click outside */

galleryModal.addEventListener(
  "click",

  (e) => {
    if (e.target === galleryModal) {
      closeGalleryModal();
    }
  },
);

/* ESC */

document.addEventListener(
  "keydown",

  (e) => {
    if (e.key === "Escape" && galleryModal.classList.contains("show")) {
      closeGalleryModal();
    }
  },
);

/* ==========================================================
   FILTERS
========================================================== */

filterButtons.forEach((button) => {
  button.addEventListener(
    "click",

    () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      buildGallery(button.dataset.filter);
    },
  );
});

/* ==========================================================
   INITIAL STATE
========================================================== */

buildGallery();

/* ==========================================================
   PART 3
   PREMIUM LIGHTBOX
========================================================== */

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");

const lightboxNext = document.getElementById("lightboxNext");

let currentIndex = 0;

let currentImages = [];

/* ==========================================================
   UPDATE LIGHTBOX
========================================================== */

function updateLightbox() {
  const item = currentImages[currentIndex];

  if (!item) return;

  lightboxImage.src = item.image;

  lightboxImage.alt = serviceTitle(item);
}

/* ==========================================================
   OPEN
========================================================== */

function openLightbox(index) {
  currentImages = [...currentFilteredServices];

  currentIndex = index;

  updateLightbox();

  lightbox.classList.add("show");

  document.body.style.overflow = "hidden";
}

/* ==========================================================
   CLOSE
========================================================== */

function closeLightbox() {
  lightbox.classList.remove("show");

  document.body.style.overflow = "";
}

/* ==========================================================
   NEXT
========================================================== */

function nextImage() {
  currentIndex++;

  if (currentIndex >= currentImages.length) {
    currentIndex = 0;
  }

  updateLightbox();
}

/* ==========================================================
   PREVIOUS
========================================================== */

function previousImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
  }

  updateLightbox();
}

/* ==========================================================
   CLICK IMAGE
========================================================== */

document.addEventListener(
  "click",

  (e) => {
    const image = e.target.closest(".gallery-image");

    if (!image) return;

    const figure = image.closest(".gallery-item");

    openLightbox(Number(figure.dataset.index));
  },
);

/* ==========================================================
   BUTTONS
========================================================== */

lightboxClose.addEventListener(
  "click",

  closeLightbox,
);

lightboxNext.addEventListener(
  "click",

  nextImage,
);

lightboxPrev.addEventListener(
  "click",

  previousImage,
);

/* ==========================================================
   CLICK OUTSIDE
========================================================== */

lightbox.addEventListener(
  "click",

  (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  },
);

/* ==========================================================
   KEYBOARD
========================================================== */

document.addEventListener(
  "keydown",

  (e) => {
    if (!lightbox.classList.contains("show")) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();

        break;

      case "ArrowRight":
        nextImage();

        break;

      case "ArrowLeft":
        previousImage();

        break;
    }
  },
);

/* ==========================================================
   PRELOAD
========================================================== */

function preload() {
  const next = (currentIndex + 1) % currentImages.length;

  const prev = (currentIndex - 1 + currentImages.length) % currentImages.length;

  new Image().src = currentImages[next].image;

  new Image().src = currentImages[prev].image;
}

const oldUpdate = updateLightbox;

updateLightbox = function () {
  oldUpdate();

  preload();
};

/* ==========================================================
   PART 4
   PREMIUM FEATURES
========================================================== */

/* ==========================
   IMAGE COUNTER
========================== */

const counter = document.getElementById("lightboxCounter");

function updateCounter() {
  if (counter) {
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  }
}

const originalUpdate = updateLightbox;

updateLightbox = function () {
  originalUpdate();

  updateCounter();
};

/* ==========================
   FOCUS TRAP
========================== */

let previousFocus = null;

function trapFocus() {
  previousFocus = document.activeElement;

  lightbox.setAttribute("tabindex", "-1");

  lightbox.focus();
}

function restoreFocus() {
  if (previousFocus) {
    previousFocus.focus();
  }
}

const oldOpen = openLightbox;

openLightbox = function (index) {
  oldOpen(index);

  trapFocus();
};

const oldClose = closeLightbox;

closeLightbox = function () {
  oldClose();

  restoreFocus();
};

/* ==========================
   TOUCH SWIPE
========================== */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener(
  "touchstart",

  (e) => {
    touchStartX = e.changedTouches[0].clientX;
  },

  { passive: true },
);

lightbox.addEventListener(
  "touchend",

  (e) => {
    touchEndX = e.changedTouches[0].clientX;

    handleSwipe();
  },

  { passive: true },
);

function handleSwipe() {
  const distance = touchStartX - touchEndX;

  if (Math.abs(distance) < 60) return;

  if (distance > 0) {
    nextImage();
  } else {
    previousImage();
  }
}

/* ==========================
   FADE ANIMATION
========================== */

lightboxImage.addEventListener(
  "load",

  () => {
    lightboxImage.animate(
      [
        {
          opacity: 0,

          transform: "scale(.96)",
        },

        {
          opacity: 1,

          transform: "scale(1)",
        },
      ],

      {
        duration: 300,

        easing: "cubic-bezier(.22,.61,.36,1)",
      },
    );
  },
);

/* ==========================
   PRELOAD ALL
========================== */

function preloadGallery() {
  services.forEach((service) => {
    const img = new Image();

    img.src = service.image;
  });
}

window.addEventListener("load", preloadGallery);

/* ==========================
   MODAL TRANSITION
========================== */

const modalObserver = new MutationObserver(() => {
  if (lightbox.classList.contains("show")) {
    lightbox.animate(
      [
        {
          opacity: 0,
        },

        {
          opacity: 1,
        },
      ],

      {
        duration: 250,

        fill: "forwards",
      },
    );
  }
});

modalObserver.observe(
  lightbox,

  {
    attributes: true,

    attributeFilter: ["class"],
  },
);

/* ==========================
   GPU OPTIMIZATION
========================== */

document.querySelectorAll(".service-card").forEach((card) => {
  card.style.transform = "translateZ(0)";
});

lightboxImage.style.willChange = "transform";

marqueeTrack.style.willChange = "transform";

/* ==========================
   RESIZE
========================== */

window.addEventListener(
  "resize",

  () => {
    marqueeTrack.style.animationPlayState = "running";
  },
);

/* ==========================================================
   PART 5
   LANGUAGE SWITCH REBUILD
   Called by the inline i18n script (applyTranslations) in the
   HTML page every time the user toggles FR/AR, so that all the
   dynamically generated titles/alt text (marquee cards, gallery
   grid, open lightbox) actually switch language too.
========================================================== */

window.rebuildGalleryUI = function () {
  // Rebuild the infinite marquee with translated titles
  buildMarquee();

  document.querySelectorAll(".service-card").forEach((card) => {
    card.style.transform = "translateZ(0)";
  });

  // Rebuild the modal grid, keeping whichever filter was active
  buildGallery(currentGalleryFilter);

  // If the lightbox is currently open, refresh its alt text too
  if (lightbox.classList.contains("show")) {
    updateLightbox();
  }
};

/* ==========================
   FINISH
========================== */

console.log(
  "%cPremium Gallery Loaded",

  "color:#0f7cff;font-size:16px;font-weight:bold",
);
