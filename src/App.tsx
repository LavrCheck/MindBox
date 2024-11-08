import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import {MindBox} from "./pages/MindBox.tsx";
import {Provider} from "react-redux";
import {store} from "../store.ts";

function App() {
    return (
        <Provider store={store}>
            <MindBox/>
        </Provider>
    )
}

export default App
