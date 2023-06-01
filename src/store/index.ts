import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { tasksSlice, usernameSlice } from "@/store/slices";

export const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    tasks: tasksSlice.reducer,
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
