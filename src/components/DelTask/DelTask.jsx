import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { delTaskAsync } from '../../reducer/tasksSlice'
import Menu from '../Menu/Menu'
import Modal from '../Modal/Modal'

const DelTask = ({ id, task }) => {
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
