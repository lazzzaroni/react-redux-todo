import { useAppDispatch } from "../../store/hooks";
import { TaskState, toggleComplete } from "../../store/slices/tasksSlice";

export function Task(task: TaskState) {
  const dispatch = useAppDispatch();

  const { title, completed } = task;

  function handleCompleteClick() {
    dispatch(toggleComplete({ id: task.id, completed: !completed }));
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
          {title}
        </span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
