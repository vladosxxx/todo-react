import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addTaskAsync, delTaskAsync } from '../../reducer/tasksSlice'

const NewTaskField: FC = () => {
  const dispatch = useAppDispatch()
  interface InputObj {
    text: string
    errorField: boolean
  }
  const [task, setTask] = useState<InputObj>({
    text: '',
    errorField: false,
  })

  const ValidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setTask({
      text: value,
      errorField: value.length > 160 ? true : false,
    })
  }
  const addTask = () => {
    // interface taskPush {
    //   id: number
    //   task: string
    //   favorite: boolean
    //   done: boolean
    // }
    const newTask = {
      id: 0,
      task: task.text,
      favorite: false,
      done: false,
    }
    console.log('newTask', newTask)

    dispatch(addTaskAsync(newTask))
  }
  function delTask(id: number) {
    dispatch(delTaskAsync(id))
  }
  return (
    <div>
      <input type="text" onChange={ValidInput} />
      <button onClick={() => delTask(1)}>Add</button>
    </div>
  )
}
export default NewTaskField
