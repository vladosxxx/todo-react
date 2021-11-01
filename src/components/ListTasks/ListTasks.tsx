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

const ListTasks = () => {
  let tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)
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
  function clickMenu(id: number | undefined) {
    setOpen(true)
    setIdMenu(id)
  }
  return (
    <>
      <button onClick={() => filterDone(!isFilter.done)}>
        Выполненные задачи
      </button>
      <button onClick={() => filterToDo(!isFilter.toDo)}>
        Задачи в работе
      </button>
      <button onClick={() => filterFavorite(!isFilter.favorite)}>
        Избранные задачи
      </button>
      <div>
        {tasks.tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.task}</h3>
            <button onClick={() => clickMenu(task.id)}>Menu</button>
            <button onClick={() => addToFavorite(task)}>
              {task.favorite ? 'в избранном' : 'НЕ в избранном'}
            </button>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Menu id={idMenu} delAndClose={setOpen} filterCheck={filterCheck} />
      </Modal>
    </>
  )
}
export default ListTasks
