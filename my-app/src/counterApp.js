import { useState } from "react";

const CounterApp = () =>{
    const [number, setNumber] = useState(0)
    
    

return (
    <div>
        <h1>Welcome to Counter Management </h1>
        <span><button onClick={()=>setNumber(number+1)}>Add</button></span>&nbsp;
        <span>{number}</span>&nbsp;
        <span><button onClick={()=>setNumber(number-1)}>Remove</button></span>
        <span><button onClick={()=>setNumber(0)}>Reset</button></span>
    </div>

)

}

export default CounterApp;