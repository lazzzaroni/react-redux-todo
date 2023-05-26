import { AddTask, AllTasks, Header } from "@/components";

export function TasksPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <AddTask />
      <AllTasks />
    </main>
  );
}
