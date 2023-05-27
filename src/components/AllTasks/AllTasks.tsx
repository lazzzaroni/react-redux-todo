import { Task } from "@/components";
import { useAppSelector } from "@/store/hooks";
import { selectTasks } from "@/store/slices/tasksSlice";

export function AllTasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <>
      <h2 className="mb-2 mt-4 text-xl font-medium text-gray-900 dark:text-gray-100">
        Task List
      </h2>
      <ul className="flex w-10/12 flex-col items-center justify-center sm:w-8/12">
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
}
