import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { editTaskAsync } from '../../reducer/tasksSlice'
import '../style/button.css'
import './style.css'
interface MenuInterFace {
  id?: number
  delOpen: (value: boolean) => void
  delAndClose: () => void
  filterCheck: () => void
}

const Menu = ({ id, filterCheck, delOpen, delAndClose }: MenuInterFace) => {
  interface NewTask {
    text: string | undefined
    errorField: boolean | undefined
    maxLength: number | undefined
  }
  const [newTask, setNewTask] = useState<NewTask | null>(null)

  const task: any | undefined = useAppSelector((state) =>
    state.tasks.tasks.find((item) => item.id === id)
  )
  const dispatch = useAppDispatch()

  const ValidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setNewTask({
      text: value,
      errorField: value.length > 160 ? true : false,
      maxLength: value.length,
    })
  }

  const addToFavorite = () => {
    dispatch(editTaskAsync({ ...task, favorite: !task!.favorite })).then(() =>
      filterCheck()
    )
  }
  const addToDone = () => {
    dispatch(editTaskAsync({ ...task, done: !task!.done })).then(() =>
      filterCheck()
    )
  }
  const editTask = () => {
    setNewTask({
      text: task!.task,
      errorField: false,
      maxLength: task!.task!.length,
    })
  }
  const putEditTask = (event: any) => {
    if (
      event.key === 'Enter' &&
      newTask !== null &&
      newTask.errorField === false
    ) {
      dispatch(editTaskAsync({ ...task, task: newTask.text }))
        .then(() => filterCheck())
        .then(() => setNewTask(null))
    }
  }
  const closeMenu = () => {
    delAndClose()
    delOpen(true)
  }
  if (task) {
    return (
      <div className="menu-window">
        {newTask === null ? (
          <h2 className="task">{task.task}</h2>
        ) : (
          <>
            <input
              autoFocus
              type="text"
              className="form__field"
              onKeyDown={putEditTask}
              onChange={ValidInput}
              value={newTask.text}
            />
            {newTask.errorField && newTask.maxLength !== undefined && (
              <span className="error-message">
                Превышен лимит текста задачи на {newTask.maxLength - 160}
                символов
              </span>
            )}
          </>
        )}
        <div className="buttons-menu">
          <button className="button button_primary" onClick={addToFavorite}>
            {task.favorite ? 'Убрать из избранного' : 'В избранное'}
          </button>
          <button className="button button_primary" onClick={addToDone}>
            {task.done ? 'Вернуть в работу' : 'Выполненно'}
          </button>
          <button className="button button_primary" onClick={editTask}>
            Редактировать
          </button>
          <button className="button button_secondary" onClick={closeMenu}>
            Удалить
          </button>
        </div>
      </div>
    )
  } else {
    delAndClose()
    return (
      <>
        <p>deleting...</p>
      </>
    )
  }
}
export default Menu
