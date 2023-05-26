import { useAppSelector } from "@/store/hooks";
import { selectActiveTasks } from "@/store/slices/tasksSlice";
import { selectUsername } from "@/store/slices/usernameSlice";

export function Header() {
  const username = useAppSelector(selectUsername);
  const activeTasks = useAppSelector(selectActiveTasks);
  const tasksLength =
    activeTasks.length === 1
      ? `${activeTasks.length} active task`
      : `${activeTasks.length} active tasks`;

  return (
    <>
      <h1 className="mb-2 mt-4 text-xl font-medium text-gray-900 dark:text-gray-100">
        Hello, {username}
      </h1>
      <p className="text-md pb-4 font-normal text-gray-900 dark:text-gray-100">
        You have {tasksLength}
      </p>
    </>
  );
}
