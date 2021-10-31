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
  task: string
  favorite: boolean
  done: boolean
}
export function addTask(task: TasksState) {
  console.log('task', task)
  return fetch('http://localhost:3004/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}
