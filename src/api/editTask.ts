export function editTask(
  id: number,
  task: string,
  favorite: boolean,
  done: boolean
) {
  return fetch('http://localhost:3004/tasks/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task: task,
      favorite: favorite,
      done: done,
    }),
  }).then((res) => res.json())
}
