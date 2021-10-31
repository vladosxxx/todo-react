// export function addTask(task: string) {
//   return fetch('http://localhost:3004/tasks')
//     .then((res) => res.json())
//     .then((task) => task.length)
//     .then((lastTask) =>
//       fetch('http://localhost:3004/tasks/' + (lastTask + 1), {
//         method: 'POST',
//         body: JSON.stringify({
//           id: lastTask + 1,
//           task: task,
//           favorite: false,
//           done: false,
//         }),
//       })
//     )
// }
interface TasksState {
  id: number
  task: string
  favorite: boolean
  done: boolean
}
export function addTask(tasks: Array<TasksState>) {
  return fetch('http://localhost:3004/tasks', {
    method: 'POST',
    body: JSON.stringify(tasks),
  })
}
