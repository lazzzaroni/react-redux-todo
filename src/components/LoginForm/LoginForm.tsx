import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { assignUsername } from "../../store/slices/usernameSlice"

export function LoginForm() {
  const [name, setName] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (name !== "") {
      dispatch(assignUsername(name))
    }
    navigate("/tasks")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" />
      <input
        id="username"
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
