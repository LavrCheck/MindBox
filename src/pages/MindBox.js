import './MindBox.sass';
import { AddSection } from "../components/AddSection.tsx";
import { TaskSection } from "../components/taskSection/TaskSection.tsx";
export var MindBox = function () {
    return <>
        <div className={'MindBox'}>
            <div className={'content'}>
                <AddSection />
                <TaskSection />
            </div>
        </div>
    </>;
};
