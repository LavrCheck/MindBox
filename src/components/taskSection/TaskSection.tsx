import {Tab, Tabs} from 'react-bootstrap';
import {useState} from "react";
import {StatusTask} from "../../../enums.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState, Task} from "../../../types.ts";
import {TaskUnit} from "./TaskUnit.tsx";
import {actions} from "../../../store.ts";

export const TaskSection = () => {

    const tasks: Task[] = useSelector((state: StoreState) => state.tasks)

    const [tabKey, setTabKey] = useState('all')

    const dispatch = useDispatch()

    if (!tasks.length) {
        return <></>
    }


    return <>
        <div className="TaskSection">
            <button
                className={`btn btn-danger mt-5 mb-4 ms-2`}
                onClick={() => {
                    if (tabKey === StatusTask.Completed) {
                        setTabKey('all')
                    }
                    dispatch(actions.deleteCompletedTasks())
                }}
            >
                <i className={`bi bi-trash-fill me-2`}></i>
                Clear completed
            </button>
            <Tabs
                id="tasks-tabs"
                activeKey={tabKey}
                onSelect={(k) => k && setTabKey(k)}
                className="mb-3"
            >
                <Tab eventKey={'all'} title="All" className={'px-3'}>
                    {
                        tasks
                            .map(t =>
                                <TaskUnit
                                    toggleStatus={() => dispatch(actions.toggleTaskStatus(t.id))}
                                    key={t.id}
                                    task={t}
                                />)
                    }
                </Tab>
                <Tab eventKey={StatusTask.Active} title="Active" className={'px-3'}>
                    {
                        tasks
                            .filter(t => t.status === StatusTask.Active)
                            .map(t =>
                                <TaskUnit
                                    toggleStatus={() => dispatch(actions.toggleTaskStatus(t.id))}
                                    key={t.id}
                                    task={t}
                                />)
                    }
                </Tab>
                <Tab eventKey={StatusTask.Completed} title="Complited" className={'px-3'}>
                    {
                        tasks
                            .filter(t => t.status === StatusTask.Completed)
                            .map(t =>
                                <TaskUnit
                                    toggleStatus={() => dispatch(actions.toggleTaskStatus(t.id))}
                                    key={t.id}
                                    task={t}
                                />)
                    }
                </Tab>
            </Tabs>
        </div>
    </>
}