import { PayloadAction, createSlice } from "@reduxjs/toolkit"
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
    assignUsername: (state, action: PayloadAction<string>) => {
      if (action.payload.trim() === "") {
        // do nothing
      } else {
        state.name = action.payload
      }
    },
  },
})

export const { assignUsername } = usernameSlice.actions

export const selectUsername = (state: RootState) => state.username.name

export default usernameSlice.reducer
