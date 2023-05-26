import { Task } from "..";
import { useAppSelector } from "../../store/hooks";
import { selectTasks } from "../../store/slices/tasksSlice";

export function AllTasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <>
      <h2>All Tasks</h2>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </>
  );
}
