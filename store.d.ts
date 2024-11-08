import { Task } from "./types";
export declare const tasksSlice: import("@reduxjs/toolkit").Slice<Task[], {
    addTask: (state: Task[], action: {
        payload: string;
    }) => void;
    deleteTask: (state: Task[], action: {
        payload: string;
    }) => Task[];
    toggleTaskStatus: (state: Task[], action: {
        payload: string;
    }) => void;
    deleteCompletedTasks: (state: Task[]) => Task[];
}, "tasks", "tasks", import("@reduxjs/toolkit").SliceSelectors<Task[]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    tasks: Task[];
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        tasks: Task[];
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    addTask: (state: Task[], action: {
        payload: string;
    }) => void;
    deleteTask: (state: Task[], action: {
        payload: string;
    }) => Task[];
    toggleTaskStatus: (state: Task[], action: {
        payload: string;
    }) => void;
    deleteCompletedTasks: (state: Task[]) => Task[];
}, "tasks">;
