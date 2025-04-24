'use client';

import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTask, removeTask, toggleTask } from '@/features/tasksSlice';
import { channel } from '@/utils/broadcast';
import {RootState} from "@/store";

export function BroadcastListener() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.items);

    useEffect(() => {
        console.log(new Date().toString());
        // 监听广播消息
        channel.onmessage = (event) => {
            console.log('onmessage');
            const { type, payload } = event.data;
            console.log(type);
            if (type === 'add') dispatch(addTask(payload));
            if (type === 'remove') dispatch(removeTask(payload));
            if (type === 'toggle') dispatch(toggleTask(payload));
        };

        // 清理广播通道
        return () => {
            // channel.close();
        };
    }, [tasks, dispatch]);

    return null;
}
