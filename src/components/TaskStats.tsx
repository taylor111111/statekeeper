'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

// 任务统计组件
export default function TaskState() {
    // 从 Redux 获取任务列表
    const tasks = useSelector((state: RootState) => state.tasks.items);

    // 计算任务总数、已完成任务数、待完成任务数
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    return (
        <div className="task-stats mb-4 p-3 rounded bg-gray-100 text-sm text-gray-800">
            <h2 className="font-semibold">📊 当前任务统计</h2>
            <ul className="ml-4 list-disc">
                <li>总数：{total}</li>
                <li>已完成：{completed}</li>
                <li>待完成：{pending}</li>
            </ul>
        </div>
    );
}
