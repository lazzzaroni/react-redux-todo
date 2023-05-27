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
    <li className="container mx-auto mb-4 h-full w-64 rounded-lg border border-gray-200 dark:border-gray-600 sm:w-96">
      <form
        onSubmit={handleSubmitClick}
        className="flex h-full flex-row items-center justify-start"
      >
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={handleCompleteClick}
          className="m-4 h-4 w-4 rounded border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
        />
        {!isEdit ? (
          <div className="w-full flex-1 py-4 text-gray-900 dark:text-white">
            {title}
          </div>
        ) : (
          <div className="flex-1">
            <label htmlFor="edit-task"></label>
            <input
              id="edit-task"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 text-inherit focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        )}
        <div className="my-4 inline-flex flex-1">
          <button className="mx-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
            {buttonName}
          </button>
          <button
            onClick={handleDeleteClick}
            className="mr-4 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </form>
    </li>
  );
}
