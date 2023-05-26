import { useAppSelector } from "@/store/hooks";
import { selectActiveTasks } from "@/store/slices/tasksSlice";

export function ActiveTasks() {
  const activeTasks = useAppSelector(selectActiveTasks);
  const tasksLength =
    activeTasks.length === 1
      ? `${activeTasks.length} active task`
      : `${activeTasks.length} active tasks`;

  return <p>You have {tasksLength}</p>;
}
