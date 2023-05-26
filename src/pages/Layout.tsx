import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <header className="bg-slate-50 p-4 text-center text-xl font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
        React + Redux Toolkit ToDo App
      </header>
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}
