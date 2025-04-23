// store/index.ts - Redux Store + redux-persist + IndexedDB 封装

'use client';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
// Redux Persist storage
import defaultStorage from 'redux-persist/lib/storage'
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage'

import tasksReducer from '../features/tasksSlice';



const persistConfig = {
    key: 'root',
    storage: globalThis.indexedDB ? createIdbStorage({}) : defaultStorage,
    version: 1,
    whitelist: ['tasks'], // 只持久化 tasks slice
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

// 类型声明
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
