export function getTasks() {
  return fetch('http://localhost:3004/tasks').then((res) => res.json())
}
