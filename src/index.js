import css from "./css/style.css";
import template from './templates/menu.hbs';
import posts from './data/posts.json';

const postsList = document.querySelector(".js-menu")
const postItem = template(posts);
postsList.insertAdjacentHTML('afterbegin', postItem)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
  console.dir(body);
  if (checkbox.checked) {
    localStorage.setItem('theme', ' ');
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);

  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');

  }
});
if (localStorage.getItem('theme')) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
