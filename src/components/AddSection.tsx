import './AddSection.sass'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../store.ts";

const capitalizeFirstLetter = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1))

export const AddSection = () => {

    const [taskName, setTaskName] = useState<string>('')

    const dispatch = useDispatch()

    return <>
        <div className={'AddSection'}>
            <input
                className={'form-control w-100'}
                placeholder={'Enter your task'}
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
            />
            <button
                className="btn btn-primary ms-3"
                onClick={() => {
                    dispatch(actions.addTask(capitalizeFirstLetter(taskName)))
                    setTaskName('')
                }}
                disabled={taskName === ''}
            >
                <i className="bi-chevron-down"></i>
            </button>
        </div>
    </>
}