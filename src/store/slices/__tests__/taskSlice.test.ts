import taskReducer, {
  addTask,
  deleteTask,
  ITaskState,
  toggleComplete,
  updateTask,
} from "@/store/slices/tasksSlice";

function createTestTask(id: string, title: string, completed: boolean = false) {
  return {
    id,
    title,
    completed,
  };
}

describe("task reducer", () => {
  const initialState: ITaskState[] = [
    createTestTask("1", "Learn Redux basics", true),
    createTestTask("2", "Cook dinner"),
    createTestTask("3", "Learn Hotel California solo", true),
  ];

  test("should add new task", () => {
    const tasks = taskReducer(initialState, addTask("Write test"));
    expect(tasks.length).toEqual(4);
  });

  test("should change task status", () => {
    const completed = false;
    const tasks = taskReducer(
      initialState,
      toggleComplete({ id: "2", completed: !completed })
    );
    const [toggledTask] = tasks.filter((task) => task.id === "2");
    expect(toggledTask.completed).toEqual(!completed);
  });

  test("should delete task", () => {
    const tasks = taskReducer(initialState, deleteTask("3"));
    expect(tasks.length).toEqual(2);
  });

  test("should update task title", () => {
    const newTitle = "Learn Raining Blood riff";
    const tasks = taskReducer(
      initialState,
      updateTask({ id: "3", title: newTitle })
    );
    const [updatedTask] = tasks.filter((task) => task.id === "3");
    expect(updatedTask.title).toEqual(newTitle);
  });
});
