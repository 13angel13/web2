import React, { useState } from 'react';
import Clock from './components/clock';
// function Welcome(props) {
//     const [value, setValue] = useState();
//     return <>   
//            <br/> {props.name} {value ? value.target.value : ''}
//         <input type={'text'} onChange={setValue} />
//     </>;
// }
// function App() {
//     return (
//         <div>
//             <Welcome name="ФИО:" /> <br/>
//             <Welcome name="Номер:" /><br/>
//             <Welcome name="Email:" /><br/>
//             <Welcome name="Дата рождения" /><br/>
//             <Welcome name="Биография:" /><br/>
//         </div>
//     );
// }

function App(){
        //{new Date().toLocaleDateString}
    return <Clock date = {new Date()}/>;
}

export default App;
