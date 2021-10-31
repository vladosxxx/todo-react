interface TasksState {
  task: string
  favorite: boolean
  done: boolean
}
export function addTask(task: TasksState) {
  return fetch('http://localhost:3004/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}
