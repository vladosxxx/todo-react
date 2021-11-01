import { taskObj } from '../reducer/tasksSlice'

export function addTask(task: taskObj) {
  return fetch('http://localhost:3004/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}
