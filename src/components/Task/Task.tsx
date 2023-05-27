import { clsx } from "clsx";
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
  const [icon, setIcon] = useState(<EditIcon />);
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
      setIcon(<EditIcon />);
    } else {
      setIsEdit(true);
      setIcon(<SaveIcon />);
    }
  }

  return (
    <li className="container mx-auto mb-4 h-full w-64 rounded-lg border border-gray-200 last:mb-8 dark:border-gray-600 sm:w-96">
      <form
        onSubmit={handleSubmitClick}
        className="flex h-full flex-row items-center justify-start"
      >
        {!isEdit ? (
          <div className="my-4 flex w-full flex-1 items-center text-gray-900 dark:text-white">
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={handleCompleteClick}
              value=""
              className="m-4 h-4 w-4 rounded border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
            />
            <span
              className={clsx(
                "text-sm sm:text-base",
                completed ? "text-purple-600 line-through" : null
              )}
            >
              {title}
            </span>
          </div>
        ) : (
          <div className="ml-4 flex-1 py-4">
            <label htmlFor="edit-task"></label>
            <input
              autoFocus
              id="edit-task"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="block h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 text-inherit focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-base"
            />
          </div>
        )}
        <div className="m-4 inline-flex">
          <button className="rounded-lg bg-yellow-400 p-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
            {icon}
          </button>
          {!isEdit ? (
            <button
              onClick={handleDeleteClick}
              className="ml-2 rounded-lg bg-red-700 p-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <TrashIcon />
            </button>
          ) : null}
        </div>
      </form>
    </li>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
