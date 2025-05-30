import { listEl } from './refs';

export function renderTask({ title, description }) {
  const markup = `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${description}</p>
      </li>`;
  listEl.insertAdjacentHTML('beforeend', markup);
}
