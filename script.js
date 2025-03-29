document.addEventListener("DOMContentLoaded", () => {
  // Array of release objects
  const releases = [
    {
      title: "AASA KOODA REMIX.",
      image: "mubaas.jpg",
      videoUrl: "https://youtu.be/UpmRucpWRlY?si=Eqo7Ka6sll9A8pWQ"
    },
    {
      title: "PACHA!",
      image: "pacha.jpg",
      videoUrl: "https://youtu.be/X3eKbhoCm2c?si=pLnvkFA9SqD1WmGc"
    },
    {
      title: "MALABAR COAST.",
      image: "malabar coast.jpg",
      videoUrl: "https://www.youtube.com/watch?v=jLkSNuZOd2M"
    },
    {
      title: "VADO.",
      image: "vado.jpg",
      videoUrl: "https://www.youtube.com/watch?v=pxol3DkP1EQ"
    }
  ];

  // Get the Swiper wrapper element
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // Build slides dynamically
  releases.forEach((release) => {
    // Slide element
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    // Release container (ensure relative positioning for overlays)
    const item = document.createElement("div");
    item.className = "release-item";
    item.style.position = "relative";

    // Image element
    const img = document.createElement("img");
    img.src = release.image;
    img.alt = release.title;
    img.loading = "lazy";

    // Create a dark overlay element to tint the image
    const darkOverlay = document.createElement("div");
    darkOverlay.className = "dark-overlay";

    // Overlay container for the text (already styled with some black background)
    const info = document.createElement("div");
    info.className = "release-info";

    // Title element (each word on its own line)
    const title = document.createElement("h3");
    title.innerHTML = release.title.split(" ").join("<br>");

    // Append the title to the text overlay container
    info.appendChild(title);

    // Append the image, dark overlay, and info overlay to the release container
    item.append(img, darkOverlay, info);

    // Add click event to redirect to YouTube
    item.addEventListener("click", () => {
      window.open(release.videoUrl, "_blank");
    });

    // Append item to slide and slide to the swiper wrapper
    slide.appendChild(item);
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 }
    }
  });
});
