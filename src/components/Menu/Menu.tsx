import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { editTaskAsync } from '../../reducer/tasksSlice'
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
  const [open, setOpen] = useState<boolean>(false)
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
  const delTask = () => {
    setOpen(true)
  }
  const closeMenu = () => {
    delAndClose()
    delOpen(true)
  }
  if (task) {
    return (
      <>
        <div>
          {newTask === null ? (
            <h4>{task.task}</h4>
          ) : (
            <input type="text" onChange={ValidInput} value={newTask.text} />
          )}

          {task.favorite ? <p>В избраном</p> : <p>Не в избранном</p>}
          {task.done ? <p>Готово</p> : <p>Не Готово</p>}

          <button onClick={addToFavorite}>
            {task.favorite ? 'Убрать из избранного' : 'В избранное'}
          </button>
          <button onClick={addToDone}>
            {task.done ? 'Вернуть в работу' : 'Выполненно'}
          </button>
          <button onClick={editTask}>Редактировать</button>
          <button onClick={closeMenu}>Удалить</button>
        </div>
      </>
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
