import { useAppSelector } from "../../store/hooks"
import { selectTasks } from "../../store/slices/tasksSlice"

export function AllTasks() {
  const tasks = useAppSelector(selectTasks)

  return (
    <>
      <h2>All Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.completed}</p>
        </div>
      ))}
    </>
  )
}
