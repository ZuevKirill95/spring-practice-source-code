import logo from './logo.svg';
import './App.css';
import {MyButton} from "./components/MyButton";
import {Profile} from "./components/Profile";
import {Edit} from "./components/Edit";
import {Books} from "./components/Books";
import {useState} from "react";
import {MyButton2} from "./components/MyButton2";
import {MyButton3} from "./components/MyButton3";
import {CountInput} from "./components/CountInput";

function App() {
    const [count, setCount] = useState(0);
    const [inputCount, setInputCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleClick2 = () => {
        setInputCount(inputCount + 1)
    }

    return (
        <div>
            <h1>React-приложение</h1>
            <h2>1 Создание компонента</h2>
            <MyButton/>

            <h2>2 Применение стилей</h2>
            <Profile/>

            <h2>3 Условный рендеринг</h2>
            <Edit/>

            <h2>4 Рендер списков</h2>
            <Books/>

            <h2>5 Кнопки с внутренним состоянием</h2>
            <div>
                <MyButton/>
            </div>
            <div>
                <MyButton/>
            </div>

            <h2>6 Кнопки с внешним состоянием</h2>
            <div>
                <MyButton2 count={count} onClick={handleClick}/>
            </div>
            <div>
                <MyButton2 count={count} onClick={handleClick}/>
            </div>

            <h2>7 Изменение одного компонента через другой</h2>
            <div>
                <MyButton3 onClick={handleClick2}/>
            </div>
            <div>
                <CountInput count={inputCount}/>
            </div>
        </div>
    );
}

export default App;
