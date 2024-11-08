import './TaskUnit.sass'
import {Task} from "../../../types.ts";
import {StatusTask} from "../../../enums.ts";

export const TaskUnit = (
    {
        task,
        toggleStatus
    }: {
        task: Task
        toggleStatus: () => void
    }
) => {
    return <>
        <div className={'TaskUnit'}>
            <button
                className={`btn ${task.status === StatusTask.Active ? 'btn-primary' : 'btn-warning'}`}
                onClick={toggleStatus}
            >
                <i className={`bi ${task.status === StatusTask.Active ? 'bi-check-lg' : 'bi-arrow-clockwise'}`}></i>
            </button>
            <span className={'ms-2'}>{task.name}</span>
        </div>
    </>
}