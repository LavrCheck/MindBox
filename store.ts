import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Task} from "./types";
import {StatusTask} from "./enums";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {
        addTask: (state: Task[], action: { payload: string }) => {
            state.unshift({
                id: Date.now().toString(),
                name: action.payload,
                status: StatusTask.Active
            });
        },
        deleteTask: (state: Task[], action: { payload: string }) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTaskStatus: (state: Task[], action: { payload: string }) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.status = task.status === StatusTask.Active ? StatusTask.Completed : StatusTask.Active;
            }
        },
        deleteCompletedTasks: (state: Task[]) => {
            return state.filter(task => task.status !== StatusTask.Completed);
        },
    },
});

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export const actions = tasksSlice.actions