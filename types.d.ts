import { StatusTask } from "./enums.ts";
export type Task = {
    id: string;
    name: string;
    status: StatusTask;
};
export type StoreState = {
    tasks: Task[];
};
