import { TaskState } from "../../store/slices/tasksSlice";

export function Task(task: TaskState) {
  const isCompleted = task.completed ? (
    <span>(completed)</span>
  ) : (
    <span>(not completed)</span>
  );

  return (
    <div style={{ border: "1px solid black", margin: "1rem" }}>
      <p>
        {task.title} {isCompleted}
      </p>
    </div>
  );
}
