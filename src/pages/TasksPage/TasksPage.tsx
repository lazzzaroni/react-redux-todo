import { AddTask, AllTasks } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { selectUsername } from "../../store/slices/usernameSlice";

export function TasksPage() {
  const username = useAppSelector(selectUsername);

  return (
    <>
      <h1>Hello, {username}</h1>
      <AddTask />
      <AllTasks />
    </>
  );
}
