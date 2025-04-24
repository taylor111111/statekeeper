// features/tasksSlice.ts - Redux slice 示例

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface TasksState {
    items: Task[];
}

const initialState: TasksState = {
    items: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.items.push(action.payload);
        },
        toggleTask(state, action: PayloadAction<string>) {
            const task = state.items.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask(state, action: PayloadAction<string>) {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },
        clearTasks(state) {
            state.items = [];
        },
    },
});

export const { addTask, toggleTask, removeTask, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
