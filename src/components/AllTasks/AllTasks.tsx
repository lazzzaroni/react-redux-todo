import { Task } from "@/components";
import { useAppSelector } from "@/store/hooks";
import { selectTasks } from "@/store/slices/tasksSlice";

export function AllTasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
}
