import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addTaskAsync } from '../../reducer/tasksSlice'
import './style.css'
import '../style/button.css'

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

  return (
    <div className="input-main">
      <div className="input-flex">
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
            onChange={ValidInput}
          />
          <label htmlFor="name" className="form__label">
            ToDo
          </label>
        </div>
        {task.errorField && (
          <span className="error-message">
            Превышен лимит текста задачи на {task.maxLength - 160} символов
          </span>
        )}
      </div>
      <button className="button button_primary" onClick={addTask}>
        Add
      </button>
    </div>
  )
}
export default NewTaskField
