import React from 'react';
import {useState} from 'react'; //new
import './styles.css';




// Version 1:
// export default function App() {
//     const [counter, setCounter] = useState(0);

//     const add=()=>{
//         //    handleClick = ;
//         setCounter((prevCount)=>prevCount + 1);
//         }
        
//     const sub=()=>{
//         setCounter((prevCount)=>prevCount - 1);
//             }
        
//     return(
//         <div className="App">
//             <button onClick={sub}>-</button>
//             <h1>{counter}</h1>
//             <button onClick={add}>+</button>
//         </div>
//     );
// }










// Version 2 (more efficient for this case):
export default function App() {
    const [counter, setCounter] = useState(0);
        
    return(
        <div className="App">
            <button onClick={()=>setCounter((prevCount)=>prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter((prevCount)=>prevCount + 1)}>+</button>
        </div>
    );
}