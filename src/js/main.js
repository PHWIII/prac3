
import 'normalize.css/normalize.css';
import '../styles/main.scss';

const body = document.body;
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.page-overlay');
const burger = document.querySelector('.header__button--type--burger');
const closeButton = document.querySelector('.sidebar__close');

const openMenu = () => {
  body.classList.add('menu-open');
  burger?.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
  body.classList.remove('menu-open');
  burger?.setAttribute('aria-expanded', 'false');
};

burger?.addEventListener('click', openMenu);
closeButton?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});


document.querySelectorAll('.sidebar__contact-icon[data-hover-src]').forEach((icon) => {
  const defaultSrc = icon.getAttribute('src');
  const hoverSrc = icon.dataset.hoverSrc;
  const contact = icon.closest('.sidebar__contact');

  contact?.addEventListener('mouseenter', () => {
    icon.setAttribute('src', hoverSrc);
  });

  contact?.addEventListener('mouseleave', () => {
    icon.setAttribute('src', defaultSrc);
  });
});

document.querySelectorAll('.sidebar__link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.sidebar__link.is-active')?.classList.remove('is-active');

    link.classList.add('is-active');

    document.querySelectorAll('.sidebar__link').forEach((item) => {
      item.removeAttribute('aria-current');
    });

    link.setAttribute('aria-current', 'page');
    closeMenu();
  });
});


document.querySelectorAll('.sidebar__language').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.sidebar__language').forEach((item) => {
      item.setAttribute('aria-pressed', 'false');
    });

    button.setAttribute('aria-pressed', 'true');
  });
});
