// src/app/page.tsx
import AddTaskForm from '@/components/AddTaskForm';
import TaskList from '@/components/TaskList';
import { BroadcastListener } from '@/components/BroadcastListener';  // 引入 BroadcastListener

export default function Page() {
    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">📄 A 标签页</h1>
            <AddTaskForm />
            <TaskList />
            <BroadcastListener/>
        </main>
    );
}
