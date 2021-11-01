export function getOneTask(id: number) {
  return fetch('http://localhost:3004/tasks/' + id).then((res) => res.json())
}
