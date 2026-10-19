
import "/node_modules/normalize.css/normalize.css";
import "/src/styles/main.scss";
import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiperElement = document.querySelector(".swiper");

if (swiperElement) {
  new Swiper(swiperElement, {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const page = document.querySelector(".page");
const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".sidebar__close");
const overlay = document.querySelector(".page__overlay");

if (page && openButton && closeButton && overlay) {
  function openMenu() {
    page.classList.add("page--menu-open");
    openButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    page.classList.remove("page--menu-open");
    openButton.setAttribute("aria-expanded", "false");
  }

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

/* «Читать далее»: не меняем текст и HTML кнопки */
document.querySelectorAll(".services__read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.closest(".services__description");

    if (!description) {
      return;
    }

    const expanded = description.classList.toggle(
      "services__description--expanded"
    );

    button.setAttribute("aria-expanded", String(expanded));
  });
});


const serviceTabs = document.querySelectorAll(".services__tab");

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();

    serviceTabs.forEach((item) => {
      item.classList.remove("services__tab--active");
    });

    tab.classList.add("services__tab--active");
  });
});
