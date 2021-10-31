import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { getAllTaskAsync, selectTasks } from '../../reducer/tasksSlice'

const ListTasks = () => {
  const tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()
  //   useEffect(() => {
  //     fetch('http://localhost:3004/tasks')
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //   }, [])
  // console.log(tasks)
  return (
    <div>
      {tasks.tasks.map((task) => (
        <div>
          <h3>{task.task}</h3>
        </div>
      ))}
    </div>
  )
}
export default ListTasks
