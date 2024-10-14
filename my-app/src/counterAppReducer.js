import { useReducer, useState } from "react"
const inititalState = {count:0};

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return{count:state.count+1};
        case 'decrement':
            return{count:state.count-1};
        default:      
        return state;  
    }
    
}

const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducer,inititalState)
    
return (
    
    <div>
        <span>Counter:{state.count}</span>
        <span><button onClick={()=>dispatch({type:'increment'})}>Add</button> &nbsp <button onClick={()=>dispatch({type:'decrement'})}>Remove</button></span>
    </div>

)
}

export default CounterReducer