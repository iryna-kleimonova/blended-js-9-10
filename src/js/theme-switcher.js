import { toggleBtn, body } from './refs';

const THEME_KEY = 'theme';

const Theme = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
};

const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === Theme.LIGHT || savedTheme === Theme.DARK) {
  body.classList.add(savedTheme);
} else {
  body.classList.add(Theme.DARK);
}

toggleBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains(Theme.DARK)
    ? Theme.LIGHT
    : Theme.DARK;

  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  localStorage.setItem(THEME_KEY, newTheme);
});
