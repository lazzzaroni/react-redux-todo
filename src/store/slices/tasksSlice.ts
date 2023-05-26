import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface TaskState {
  id: string;
  title: string;
  completed: boolean;
}

function createTask(title: string, completed: boolean = false) {
  return {
    id: nanoid(),
    title,
    completed,
  };
}

const initialState: TaskState[] = [
  createTask("Cook dinner"),
  createTask("Finish todo application", true),
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push(createTask(action.payload));
    },
  },
});

export const { addTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
