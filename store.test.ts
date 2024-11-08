import { tasksSlice, actions } from './store';
import { StatusTask } from './enums';
import { Task } from './types';

const initialState: Task[] = [
    { id: '1', name: 'Task 1', status: StatusTask.Active },
    { id: '2', name: 'Task 2', status: StatusTask.Completed },
];

describe('tasksSlice', () => {

    it('should add a task', () => {
        const newTaskName = 'New Task';
        const action = actions.addTask(newTaskName);
        const newState = tasksSlice.reducer(initialState, action);

        expect(newState.length).toBe(3);
        expect(newState[0].name).toBe(newTaskName);
        expect(newState[0].status).toBe(StatusTask.Active);
    });

    it('should delete a task', () => {
        const action = actions.deleteTask('1');
        const newState = tasksSlice.reducer(initialState, action);

        expect(newState.length).toBe(1);
        expect(newState[0].id).toBe('2');
    });

    it('should toggle the task status', () => {
        const action = actions.toggleTaskStatus('1');
        const newState = tasksSlice.reducer(initialState, action);

        expect(newState[0].status).toBe(StatusTask.Completed);
        const action2 = actions.toggleTaskStatus('1');
        const newState2 = tasksSlice.reducer(newState, action2);
        expect(newState2[0].status).toBe(StatusTask.Active);
    });

    it('should delete completed tasks', () => {
        const action = actions.deleteCompletedTasks();
        const newState = tasksSlice.reducer(initialState, action);

        expect(newState.length).toBe(1);
        expect(newState[0].status).toBe(StatusTask.Active);
    });
});