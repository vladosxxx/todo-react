import React, { FC, useState } from 'react'

const NewTaskField: FC = () => {
  interface InputObj {
    text: string
    errorField: boolean
  }
  const [task, setTask] = useState<InputObj>({
    text: '',
    errorField: false,
  })

  const ValidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setTask({
      text: value,
      errorField: value.length > 160 ? true : false,
    })
  }

  return (
    <div>
      <input type="text" onChange={ValidInput} />
      <button>Add</button>
    </div>
  )
}
export default NewTaskField
