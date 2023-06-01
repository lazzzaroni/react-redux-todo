import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Layout, LoginPage, TasksPage } from "@/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
