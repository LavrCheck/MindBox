import { configureStore, createSlice } from '@reduxjs/toolkit';
import { StatusTask } from "./enums";
export var tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: function (state, action) {
            state.unshift({
                id: Date.now().toString(),
                name: action.payload,
                status: StatusTask.Active
            });
        },
        deleteTask: function (state, action) {
            return state.filter(function (task) { return task.id !== action.payload; });
        },
        toggleTaskStatus: function (state, action) {
            var task = state.find(function (task) { return task.id === action.payload; });
            if (task) {
                task.status = task.status === StatusTask.Active ? StatusTask.Completed : StatusTask.Active;
            }
        },
        deleteCompletedTasks: function (state) {
            return state.filter(function (task) { return task.status !== StatusTask.Completed; });
        },
    },
});
export var store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});
export var actions = tasksSlice.actions;
