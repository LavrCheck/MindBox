import { Tab, Tabs } from 'react-bootstrap';
import { useState } from "react";
import { StatusTask } from "../../../enums.ts";
import { useDispatch, useSelector } from "react-redux";
import { TaskUnit } from "./TaskUnit.tsx";
import { actions } from "../../../store.ts";
export var TaskSection = function () {
    var tasks = useSelector(function (state) { return state.tasks; });
    var _a = useState('all'), tabKey = _a[0], setTabKey = _a[1];
    var dispatch = useDispatch();
    if (!tasks.length) {
        return <></>;
    }
    return <>
        <div className="TaskSection">
            <button className={"btn btn-danger mt-5 mb-4 ms-2"} onClick={function () {
            if (tabKey === StatusTask.Completed) {
                setTabKey('all');
            }
            dispatch(actions.deleteCompletedTasks());
        }}>
                <i className={"bi bi-trash-fill me-2"}></i>
                Clear completed
            </button>
            <Tabs id="tasks-tabs" activeKey={tabKey} onSelect={function (k) { return k && setTabKey(k); }} className="mb-3">
                <Tab eventKey={'all'} title="All" className={'px-3'}>
                    {tasks
            .map(function (t) {
            return <TaskUnit toggleStatus={function () { return dispatch(actions.toggleTaskStatus(t.id)); }} key={t.id} task={t}/>;
        })}
                </Tab>
                <Tab eventKey={StatusTask.Active} title="Active" className={'px-3'}>
                    {tasks
            .filter(function (t) { return t.status === StatusTask.Active; })
            .map(function (t) {
            return <TaskUnit toggleStatus={function () { return dispatch(actions.toggleTaskStatus(t.id)); }} key={t.id} task={t}/>;
        })}
                </Tab>
                <Tab eventKey={StatusTask.Completed} title="Complited" className={'px-3'}>
                    {tasks
            .filter(function (t) { return t.status === StatusTask.Completed; })
            .map(function (t) {
            return <TaskUnit toggleStatus={function () { return dispatch(actions.toggleTaskStatus(t.id)); }} key={t.id} task={t}/>;
        })}
                </Tab>
            </Tabs>
        </div>
    </>;
};
