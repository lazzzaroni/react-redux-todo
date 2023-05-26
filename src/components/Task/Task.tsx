import { useState } from "react";

import { useAppDispatch } from "@/store/hooks";
import {
  deleteTask,
  ITaskState,
  toggleComplete,
  updateTask,
} from "@/store/slices/tasksSlice";

export function Task(task: ITaskState) {
  const { id, title, completed } = task;

  const [isEdit, setIsEdit] = useState(false);
  const [buttonName, setButtonName] = useState("Edit");
  const [value, setValue] = useState(title);

  const dispatch = useAppDispatch();

  function handleCompleteClick() {
    dispatch(toggleComplete({ id, completed: !completed }));
  }

  function handleDeleteClick(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(deleteTask(id));
  }

  function handleSubmitClick(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateTask({ id, title: value }));
      setIsEdit(false);
      setButtonName("Edit");
    } else {
      setIsEdit(true);
      setButtonName("Save");
    }
  }

  return (
    <li style={{ listStyleType: "none", marginBottom: "1rem" }}>
      <form onSubmit={handleSubmitClick}>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={handleCompleteClick}
        />
        {!isEdit ? (
          <>{title}</>
        ) : (
          <>
            <label htmlFor="edit-task"></label>
            <input
              id="edit-task"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        )}
        <button>{buttonName}</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </form>
    </li>
  );
}
