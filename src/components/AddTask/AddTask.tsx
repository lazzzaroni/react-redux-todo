import { useState } from "react"
import { useAppDispatch } from "../../store/hooks"
import { addTask } from "../../store/slices/tasksSlice"

export function AddTask() {
  const [value, setValue] = useState("")
  const dispatch = useAppDispatch()
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch(addTask(value))
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" />
      <input
        id="username"
        type="text"
        value={value}
        placeholder="Add task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
