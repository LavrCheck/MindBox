import './TaskUnit.sass';
import { StatusTask } from "../../../enums.ts";
export var TaskUnit = function (_a) {
    var task = _a.task, toggleStatus = _a.toggleStatus;
    return <>
        <div className={'TaskUnit'}>
            <button className={"btn ".concat(task.status === StatusTask.Active ? 'btn-primary' : 'btn-warning')} onClick={toggleStatus}>
                <i className={"bi ".concat(task.status === StatusTask.Active ? 'bi-check-lg' : 'bi-arrow-clockwise')}></i>
            </button>
            <span className={'ms-2'}>{task.name}</span>
        </div>
    </>;
};
