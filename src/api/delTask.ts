export function delTask(id: number | undefined) {
  return fetch('http://localhost:3004/tasks/' + id, {
    method: 'DELETE',
  }).then(() => id)
}
