import './AddSection.sass';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store.ts";
var capitalizeFirstLetter = function (str) { return (str.charAt(0).toUpperCase() + str.slice(1)); };
export var AddSection = function () {
    var _a = useState(''), taskName = _a[0], setTaskName = _a[1];
    var dispatch = useDispatch();
    return <>
        <div className={'AddSection'}>
            <input className={'form-control w-100'} placeholder={'Enter your task'} onChange={function (e) { return setTaskName(e.target.value); }} value={taskName}/>
            <button className="btn btn-primary ms-3" onClick={function () {
            dispatch(actions.addTask(capitalizeFirstLetter(taskName)));
            setTaskName('');
        }} disabled={taskName === ''}>
                <i className="bi-chevron-down"></i>
            </button>
        </div>
    </>;
};
