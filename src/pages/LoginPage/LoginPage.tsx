import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store/hooks";
import { assignUsername } from "@/store/slices/usernameSlice";

export function LoginPage() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (name.trim() !== "") {
      dispatch(assignUsername(name));
    }
    navigate("/tasks");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 flex h-full flex-col items-center justify-center"
    >
      <label
        htmlFor="username"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter your name
      </label>
      <input
        autoFocus
        id="username"
        type="text"
        value={name}
        placeholder="e.g. Mick"
        onChange={(e) => setName(e.target.value)}
        className="mb-4 block w-60 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <button className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        Submit
      </button>
    </form>
  );
}
