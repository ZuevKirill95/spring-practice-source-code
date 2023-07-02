import logo from './logo.svg';
import './App.css';
import {MyButton} from "./components/MyButton";
import {Profile} from "./components/Profile";
import {Edit} from "./components/Edit";
import {Books} from "./components/Books";

function App() {
    return (
        <div>
            <h1>React-приложение</h1>
            <MyButton/>

            <Edit/>

            <Books/>

            <Profile/>
        </div>
    );
}

export default App;
