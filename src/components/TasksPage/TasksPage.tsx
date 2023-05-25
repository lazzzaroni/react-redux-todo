import { useAppSelector } from "../../store/hooks"
import { selectUsername } from "../../store/slices/usernameSlice"
import { Task } from "../Task"

export function TasksPage() {
  const username = useAppSelector(selectUsername)

  return (
    <>
      <h1>Hello, {username}</h1>
      <Task />
    </>
  )
}
