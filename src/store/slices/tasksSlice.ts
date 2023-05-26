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
    toggleComplete: (
      state,
      action: PayloadAction<Omit<TaskState, "title">>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;
export const selectActiveTasks = (state: RootState) =>
  state.tasks.filter((task) => !task.completed);

export default tasksSlice.reducer;
