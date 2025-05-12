import { form, listEl } from './refs';
import { renderTask } from './tasks';
import {
  saveTaskToLS,
  deleteTaskFromLS,
  renderTaskFromLS,
} from './local-storage-api';

renderTaskFromLS();
form.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = e.target.taskName.value.trim();
  const taskDescription = e.target.taskDescription.value.trim();
  console.log(taskName);
  console.log(taskDescription);

  if (!taskName || !taskDescription) {
    return alert('Заповніть усі поля форми!');
  }
  renderTask({ title: taskName, description: taskDescription });
  saveTaskToLS({ title: taskName, description: taskDescription });

  form.reset();
});

listEl.addEventListener('click', e => {
  if (e.target.classList.contains('task-list-item-btn')) {
    const taskItem = e.target.closest('.task-list-item');
    const indexEl = [...listEl.children].indexOf(taskItem);

    taskItem.remove();
    deleteTaskFromLS(indexEl);
  }
});
