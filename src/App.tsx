import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Layout, LoginForm, TasksPage } from "./components"
import { Counter } from "./features/counter/Counter"
import logo from "./logo.svg"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="boilerplate" element={<StartPage />} />
      </Route>
    </Routes>
  )
}

function StartPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}
export default App
