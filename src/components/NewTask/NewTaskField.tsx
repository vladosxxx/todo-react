import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addTaskAsync, delTaskAsync } from '../../reducer/tasksSlice'

const NewTaskField: FC = () => {
  const dispatch = useAppDispatch()

  interface InputObj {
    text: string
    errorField: boolean
    maxLength: number
  }
  const [task, setTask] = useState<InputObj>({
    text: '',
    errorField: false,
    maxLength: 0,
  })

  const ValidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setTask({
      text: value,
      errorField: value.length > 160 ? true : false,
      maxLength: value.length,
    })
  }
  const addTask = () => {
    if (task.errorField === false) {
      const newTask = {
        id: 0,
        task: task.text,
        favorite: false,
        done: false,
      }
      console.log('newTask', newTask)

      dispatch(addTaskAsync(newTask))
    }
  }
  function delTask(id: number) {
    dispatch(delTaskAsync(id))
  }

  return (
    <div>
      <div>
        <input type="text" onChange={ValidInput} />
        <button onClick={addTask}>Add</button>
        {task.errorField && (
          <span className="error-message">
            Превышен лимит текста задачи на {task.maxLength - 160} символов
          </span>
        )}
      </div>
    </div>
  )
}
export default NewTaskField
