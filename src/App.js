import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import './App.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
{ new Date().toDateString() }
{ new Date().toLocaleDateString() }
function App() {
    const timer = function () {
        let time = new Date().toLocaleTimeString()
        return

    };
    return <><Clock date={new Date()} />
    </>

}

export default App;





/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    const [value, setValue] = useState();
    return <>   
           <br/> {props.name} {value ? value.target.value : ''}
        <input type={'text'} onChange={setValue} />
    </>;
}
function App() {
    return (
        <div>
            <Welcome name="ФИО:" /> <br/>
            <Welcome name="Номер:" /><br/>
            <Welcome name="Email:" /><br/>
            <Welcome name="Дата рождения" /><br/>
            <Welcome name="Биография:" /><br/>
        </div>
    );
}
export default Welcome; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); */
