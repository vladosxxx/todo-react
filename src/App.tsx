import React, { FC } from 'react'
import './App.css'
import ListTasks from './components/ListTasks/ListTasks'
import NewTaskField from './components/NewTask/NewTaskField'

const App: FC = () => {
  return (
    <div className="App">
      <NewTaskField />
      <ListTasks />
    </div>
  )
}

export default App
