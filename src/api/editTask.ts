import { taskObj } from '../reducer/tasksSlice'
export function editTask(task: taskObj) {
  return fetch('http://localhost:3004/tasks/' + task.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}
