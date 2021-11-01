interface taskObj {
  id: number
  task: string
  favorite: boolean
  done: boolean
}
export function editTask(task: taskObj) {
  return fetch('http://localhost:3004/tasks/' + task.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}
