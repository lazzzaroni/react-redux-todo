import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <header className="border-b border-gray-200 bg-slate-50 p-3 text-center text-lg font-semibold text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 sm:p-4 sm:text-2xl">
        React + Redux Toolkit ToDo App
      </header>
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}
