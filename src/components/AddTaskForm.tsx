// components/AddTaskForm.tsx - 添加任务组件

'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { channel } from '@/utils/broadcast';  // 引入广播通道

export default function AddTaskForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            const newTask = {
                id: Date.now().toString(),
                text: text,
                completed: false,
            };
            dispatch(addTask(newTask));
            channel.postMessage({ type: 'add', payload: newTask });
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                className="flex-1 px-4 py-2 border rounded-md text-black"
                value={text}
                placeholder="添加任务..."
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                添加
            </button>
        </form>
    );
}
