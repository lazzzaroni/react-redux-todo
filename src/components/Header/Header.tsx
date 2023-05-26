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
      <h1>Hello, {username}</h1>
      <p>You have {tasksLength}</p>
    </>
  );
}
