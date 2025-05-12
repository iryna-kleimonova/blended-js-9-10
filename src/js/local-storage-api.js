import { listEl } from './refs';

export function saveTaskToLS(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  //   if (!Array.isArray(tasks)) {
  //     tasks = [];
  //   }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTaskFromLS(indexEl) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const filteredEl = tasks.filter((task, index) => index !== indexEl);
  localStorage.setItem('tasks', JSON.stringify(filteredEl));
}

export function renderTaskFromLS(params) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const markup = tasks
    .map(
      ({ title, description }) => `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${description}</p>
      </li>`
    )
    .join('\n');
  listEl.insertAdjacentHTML('beforeend', markup);
}
