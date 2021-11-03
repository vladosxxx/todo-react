import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  getAllTaskAsync,
  selectTasks,
  getDoneTasks,
  getToDoTasks,
  getFavoriteTasks,
  editTaskAsync,
  taskObj,
} from '../../reducer/tasksSlice'
import Menu from '../Menu/Menu'
import Modal from '../Modal/Modal'
import DelTask from '../DelTask/DelTask'
import '../style/button.css'
import './style.css'
import MenuImg from './image/menu.png'
import StarActive from './image/star-active.png'
import Star from './image/star.png'

const ListTasks = () => {
  let tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)
  const [delOpen, setDelOpen] = useState<boolean>(false)

  const [idMenu, setIdMenu] = useState<number>()
  const [isFilter, setFilter] = useState({
    done: false,
    toDo: false,
    favorite: false,
  })

  function filterAll() {
    dispatch(getAllTaskAsync())
  }
  function filterDone(toggle: boolean) {
    setFilter({
      done: toggle,
      toDo: false,
      favorite: false,
    })
    toggle
      ? dispatch(getAllTaskAsync()).then(() => dispatch(getDoneTasks()))
      : filterAll()
  }
  function filterToDo(toggle: boolean) {
    setFilter({
      done: false,
      toDo: toggle,
      favorite: false,
    })
    toggle
      ? dispatch(getAllTaskAsync()).then(() => dispatch(getToDoTasks()))
      : filterAll()
  }
  function filterFavorite(toggle: boolean) {
    setFilter({
      done: false,
      toDo: false,
      favorite: toggle,
    })
    toggle
      ? dispatch(getAllTaskAsync()).then(() => dispatch(getFavoriteTasks()))
      : filterAll()
  }
  const addToFavorite = (task: taskObj) => {
    dispatch(editTaskAsync({ ...task, favorite: !task.favorite }))
  }
  const filterCheck = () => {
    if (isFilter.done) {
      filterDone(isFilter.done)
    } else if (isFilter.toDo) {
      filterToDo(isFilter.toDo)
    } else if (isFilter.favorite) {
      filterFavorite(isFilter.favorite)
    } else {
      filterAll()
    }
  }
  const menuClose = () => {
    setOpen(false)
  }
  function clickMenu(id: number | undefined) {
    setOpen(true)
    setIdMenu(id)
  }
  return (
    <>
      <button
        className={isFilter.done ? 'button button_primary' : 'button'}
        onClick={() => filterDone(!isFilter.done)}
      >
        Выполненные задачи
      </button>
      <button
        className={isFilter.toDo ? 'button button_primary' : 'button'}
        onClick={() => filterToDo(!isFilter.toDo)}
      >
        Задачи в работе
      </button>
      <button
        className={isFilter.favorite ? 'button button_primary' : 'button'}
        onClick={() => filterFavorite(!isFilter.favorite)}
      >
        Избранные задачи
      </button>
      <div className="wrapper">
        <ul id="ul">
          {tasks.tasks.map((task) => (
            <li key={task.id}>
              <h2 className="task">{task.task}</h2>
              <div>
                <button
                  className="button-icons"
                  onClick={() => clickMenu(task.id)}
                >
                  <img src={MenuImg} alt="menu" />
                </button>
                <button
                  className="button-icons"
                  onClick={() => addToFavorite(task)}
                >
                  <img src={task.favorite ? StarActive : Star} alt="favorite" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={open && delOpen ? 'cd-popup' : ''}>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Menu
            id={idMenu}
            filterCheck={filterCheck}
            delOpen={setDelOpen}
            delAndClose={menuClose}
          />
        </Modal>
        <Modal open={delOpen} onClose={() => setDelOpen(false)}>
          <DelTask id={idMenu} delAndClose={() => setDelOpen(false)} />
        </Modal>
      </div>
    </>
  )
}
export default ListTasks
