import React from 'react'
import { useAppDispatch } from '../../store/hooks'
import { delTaskAsync } from '../../reducer/tasksSlice'

interface propsDel {
  id?: number
  task?: string | undefined
}
const DelTask = ({ id, task }: propsDel) => {
  const dispatch = useAppDispatch()

  const delTask = () => {
    dispatch(delTaskAsync(id))
  }
  return (
    <>
      <h3>Вы действительно хотите удалить задачу?</h3>
      <h4>{task}</h4>
      <button onClick={delTask}>Да, удалить</button>
      <button>Отмена</button>
    </>
  )
}
export default DelTask
