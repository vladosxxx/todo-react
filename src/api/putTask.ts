export function putTask(
  task: string,
  id: number,
  favorite: boolean,
  done: boolean
) {
  return fetch('http://localhost:3004/tasks/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      id: id,
      task: task,
      favorite: favorite,
      done: done,
    }),
  })
}
