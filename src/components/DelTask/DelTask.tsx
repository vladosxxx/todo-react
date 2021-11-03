import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { delTaskAsync } from '../../reducer/tasksSlice'
import '../style/button.css'
import './style.css'

interface propsDel {
  id?: number
  delAndClose: () => void
}
const DelTask = ({ id, delAndClose }: propsDel) => {
  const task: any | undefined = useAppSelector((state) =>
    state.tasks.tasks.find((item) => item.id === id)
  )
  const dispatch = useAppDispatch()

  const delTask = () => {
    dispatch(delTaskAsync(id))
    delAndClose()
  }
  return (
    <div className="del-window">
      <div>
        <h4>Вы действительно хотите удалить задачу?</h4>
        <h2>{task.task}</h2>
      </div>
      <div>
        <button className="button button_primary" onClick={delAndClose}>
          Отмена
        </button>
        <button className="button button_secondary" onClick={delTask}>
          Да, удалить
        </button>
      </div>
    </div>
  )
}
export default DelTask
