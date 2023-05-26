import { useAppDispatch } from "@/store/hooks";
import {
  deleteTask,
  ITaskState,
  toggleComplete,
} from "@/store/slices/tasksSlice";

export function Task(task: ITaskState) {
  const dispatch = useAppDispatch();

  const { id, title, completed } = task;

  function handleCompleteClick() {
    dispatch(toggleComplete({ id, completed: !completed }));
  }

  function handleDeleteClick() {
    dispatch(deleteTask(id));
  }

  return (
    <li style={{ listStyleType: "none", marginBottom: "1rem" }}>
      <div>
        <span>
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={handleCompleteClick}
          />
        </span>
        {title}
        <button>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
}
