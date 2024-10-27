document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const navToggle = document.querySelector('.header__toggle');
  const contacts = document.querySelector('.contacts__map-static');
  const link = document.querySelector('.more-cards-js');

  if (navigation) {
    navigation.classList.remove('navigation--no-js');
  }

  if (contacts) {
    contacts.classList.remove('contacts__map-static--no-js');
  }

  const button = document.createElement('button');
  button.className = 'main-button main-button--gray';
  button.type = 'button';
  button.textContent = 'показать все';

  if (link) {
    link.parentNode.replaceChild(button, link);
  }

  navToggle.addEventListener('click', () => {
    if (navigation.classList.contains('navigation--closed')) {
      navigation.classList.remove('navigation--closed');
      navigation.classList.add('navigation--opened');
      navToggle.setAttribute('aria-label', 'закрыть меню');
    } else {
      navigation.classList.add('navigation--closed');
      navigation.classList.remove('navigation--opened');
      navToggle.setAttribute('aria-label', 'открыть меню');
    }
  });
});
