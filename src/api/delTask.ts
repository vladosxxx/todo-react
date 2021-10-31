export function delTask(id: number) {
  return fetch('http://localhost:3004/tasks/' + id, {
    method: 'DELETE',
  }).then(() => id)
}
