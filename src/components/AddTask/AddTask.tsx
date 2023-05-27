import { useState } from "react";

import { useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/tasksSlice";

export function AddTask() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (value.trim() === "") return;
    dispatch(addTask(value));
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col items-center justify-center sm:w-96 sm:flex-row "
    >
      <div className="w-64 sm:w-full">
        <label htmlFor="username"></label>
        <input
          autoFocus
          id="username"
          type="text"
          value={value}
          placeholder="Add new task"
          onChange={(e) => setValue(e.target.value)}
          className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <button className="mt-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 sm:ml-3 sm:mt-0">
        Submit
      </button>
    </form>
  );
}
