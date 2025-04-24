// components/TaskList.tsx - 显示任务列表 + 切换完成状态 + 删除

'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTask, removeTask } from '../features/tasksSlice';
import { channel } from '@/utils/broadcast';  // 引入广播通道

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks.items);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return <p className="text-gray-500">当前没有任务。</p>;
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center justify-between p-3 border rounded-md bg-white text-black"
                >
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                                dispatch(toggleTask(task.id));
                                channel.postMessage({ type: 'toggle', payload: task.id });
                            }}
                            className="accent-blue-600"
                        />
                        <span
                            className={`${
                                task.completed ? 'line-through text-gray-400' : ''
                            }`}
                        >
              {task.text}
            </span>
                    </div>
                    <button
                        onClick={() => {
                            dispatch(removeTask(task.id));
                            // 广播任务删除
                            channel.postMessage({ type: 'remove', payload: task.id });
                        }}
                        className="text-red-600 hover:text-red-800"
                    >
                        删除
                    </button>
                </li>
            ))}
        </ul>
    );
}
