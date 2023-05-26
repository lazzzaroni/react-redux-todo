import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import tasksReducer from "./slices/tasksSlice";
import usernameReducer from "./slices/usernameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
