// app/page.tsx - 任务管理首页

import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

export default function HomePage() {
  return (
      <main className="max-w-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-white">StateKeeper · 任务管理器</h1>
        <AddTaskForm />
        <TaskList />
      </main>
  );
}
