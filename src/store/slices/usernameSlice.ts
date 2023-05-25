import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."

export interface UsernameState {
  name: string
}

const initialState: UsernameState = {
  name: "Guest",
}

export const usernameSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name
    },
  },
})

export const { setName } = usernameSlice.actions

export const selectUsername = (state: RootState) => state.username.name

export default usernameSlice.reducer
