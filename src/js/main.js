
import 'normalize.css/normalize.css';
import '../styles/main.scss';

// Импорт изображений для наведения
import burgerHoverIcon from '../assets/burger 1.svg';
import callHoverIcon from '../assets/call 1.svg';
import chatHoverIcon from '../assets/chat 1.svg';
import profileHoverIcon from '../assets/profile 1.svg';
import repairHoverIcon from '../assets/repair 1.svg';
import checkstatusHoverIcon from '../assets/checkstatus 1.svg';

const body = document.body;
const overlay = document.querySelector('.page-overlay');
const burger = document.querySelector('.header__button--type--burger');
const closeButton = document.querySelector('.sidebar__close');

// Открытие и закрытие бокового меню
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
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Карта изображений для состояний наведения
const hoverIcons = {
  burger: burgerHoverIcon,
  call: callHoverIcon,
  chat: chatHoverIcon,
  profile: profileHoverIcon,
  repair: repairHoverIcon,
  checkstatus: checkstatusHoverIcon,
};

// Переключение изображений на всех кнопках
document.querySelectorAll('img[data-hover-icon]').forEach((icon) => {
  const defaultSrc = icon.getAttribute('src');
  const hoverSrc = hoverIcons[icon.dataset.hoverIcon];
  const target = icon.closest('a, button') || icon;

  if (!hoverSrc || !defaultSrc) return;

  const showHover = () => {
    icon.setAttribute('src', hoverSrc);
  };

  const showDefault = () => {
    icon.setAttribute('src', defaultSrc);
  };

  target.addEventListener('mouseenter', showHover);
  target.addEventListener('mouseleave', showDefault);
  target.addEventListener('focusin', showHover);
  target.addEventListener('focusout', showDefault);
});

// Выбор активной категории бокового меню
document.querySelectorAll('.sidebar__link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.sidebar__link.is-active')
      ?.classList.remove('is-active');

    link.classList.add('is-active');

    document.querySelectorAll('.sidebar__link').forEach((item) => {
      item.removeAttribute('aria-current');
    });

    link.setAttribute('aria-current', 'page');

    closeMenu();
  });
});

// Выбор активной горизонтальной категории
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav__link.nav__link--active')
      ?.classList.remove('nav__link--active');

    link.classList.add('nav__link--active');
  });
});

// Переключение языка
document.querySelectorAll('.sidebar__language').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.sidebar__language').forEach((item) => {
      item.setAttribute('aria-pressed', 'false');
    });

    button.setAttribute('aria-pressed', 'true');
  });
});
