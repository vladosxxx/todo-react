import React, { useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { delTaskAsync } from '../../reducer/tasksSlice'

interface propsDel {
  id?: number
  delAndClose: () => void
  task?: string | undefined
}
const DelTask = ({ id, task, delAndClose }: propsDel) => {
  const dispatch = useAppDispatch()

  const delTask = () => {
    dispatch(delTaskAsync(id))
    delAndClose()
  }
  return (
    <>
      <h3>Вы действительно хотите удалить задачу?</h3>
      <h4>{task}</h4>
      <button onClick={delTask}>Да, удалить</button>
      <button onClick={delAndClose}>Отмена</button>
    </>
  )
}
export default DelTask
