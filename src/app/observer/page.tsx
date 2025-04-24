
import TaskStats from '@/components/TaskStats';
import { BroadcastListener } from '@/components/BroadcastListener';  // 引入 BroadcastListener
export default function ObserverPage() {
    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">🧭 Observer 标签页</h1>
            <TaskStats />
            <BroadcastListener />
        </main>
    );
}
