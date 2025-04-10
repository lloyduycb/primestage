document.addEventListener("DOMContentLoaded", () => {
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
    },
    {
      title: "MAMMOO-T (CASH FLOW).",
      image: "EQ5bPkKM6fs-HD.jpg",
      videoUrl: "https://www.youtube.com/watch?v=EQ5bPkKM6fs"
    },
    {
      title: "SPACE JUNGLE.",
      image: "TH43WtZcpqE-HD.jpg",
      videoUrl: "https://youtu.be/TH43WtZcpqE?si=lvtl1WVQgTn_0d5K"
    },
    {
      title: "UNINVITED.",
      image: "9zEfp60YAhE-HD.jpg",
      videoUrl: "https://youtube.com/watch?v=9zEfp60YAhE"
    },
  ];

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  releases.forEach((release) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const item = document.createElement("div");
    item.className = "release-item";

    const img = document.createElement("img");
    img.src = release.image;
    img.alt = release.title;
    img.loading = "lazy";

    const darkOverlay = document.createElement("div");
    darkOverlay.className = "dark-overlay";

    const info = document.createElement("div");
    info.className = "release-info";

    const title = document.createElement("h3");
    title.innerHTML = release.title.split(" ").join("<br>");
    info.appendChild(title);

    item.append(img, darkOverlay, info);

    item.addEventListener("click", () => {
      window.open(release.videoUrl, "_blank");
    });

    slide.appendChild(item);
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});
