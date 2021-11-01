import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../store/store'
import { getTasks } from '../api/getTasks'
import { addTask } from '../api/addTask'
import { delTask } from '../api/delTask'
import { getOneTask } from '../api/getOneTask'
import { editTask } from '../api/editTask'

interface taskObj {
  id: number
  task: string
  favorite: boolean
  done: boolean
}
export interface TasksState {
  tasks: Array<taskObj>
  isLoading: boolean
}

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
}

export const getAllTaskAsync = createAsyncThunk('tasks/getTasks', async () => {
  const res = await getTasks()
  return res
})
export const addTaskAsync = createAsyncThunk(
  'task/addTask',
  async (task: taskObj) => {
    const res = await addTask(task)
    return res
  }
)
export const delTaskAsync = createAsyncThunk(
  'task/delTask',
  async (id: number) => {
    const res = await delTask(id)
    return res
  }
)
export const editTaskAsync = createAsyncThunk(
  'task/editTask',
  async (task: taskObj) => {
    const res = await editTask(task)
    return res
  }
)

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getDoneTasks: (state) => {
      state.tasks = state.tasks.filter((item) => item.done === true)
    },
    getToDoTasks: (state) => {
      state.tasks = state.tasks.filter((item) => item.done === false)
    },
    getFavoriteTasks: (state) => {
      state.tasks = state.tasks.filter((item) => item.favorite === true)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTaskAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.tasks = action.payload
      })
      .addCase(addTaskAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        return {
          isLoading: false,
          tasks: [...state.tasks, action.payload],
        }
      })
      .addCase(delTaskAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(delTaskAsync.fulfilled, (state, action) => {
        console.log('action', action.payload)
        return {
          isLoading: false,
          tasks: state.tasks.filter((item) => item.id !== action.payload),
        }
      })
      .addCase(editTaskAsync.fulfilled, (state, action) => {
        return {
          isLoading: false,
          tasks: state.tasks.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        }
      })
  },
})

export const { getDoneTasks, getToDoTasks, getFavoriteTasks } =
  tasksSlice.actions
export const selectTasks = (state: RootState) => state.tasks
export const selectTasksAsync = (): AppThunk => (dispatch, getState) => {
  selectTasks(getState())
}

export default tasksSlice.reducer
