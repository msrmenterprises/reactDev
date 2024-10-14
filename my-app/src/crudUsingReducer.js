    import { act, useReducer, useState } from "react"

    const initialState = {
        tasks:[{
            id:Date.now(),
            title:'MyTask',
            toggleStatus:true
        }]
    }

    function reducer(state, action){
        switch(action.type){
            case 'add_task':
        return {
            ...state,
            tasks: [...state.tasks, {id:Date.now(),title:action.payload,toggleStatus:true}],
        };
        case 'remove_task':
            return{
                ...state,
                tasks:state.tasks.filter((task)=>task.id != action.payload)

            }
        
        case 'toggle_task':
            return{
                ...state,
                tasks:state.tasks.map(
                    (item)=>item.id === action.payload ? {...item,toggleStatus:!item.toggleStatus}:item
                )
            }
            default:
                return state
        }
        
        
    }
    const CrudUsingReducer = () => {

    const [state, dispatch] = useReducer(reducer,initialState)

    const [newTask , setNewTask] = useState();
  
        
    return (

        <div>

            <h1>Welcome To CRUD Setup using useReducer Hook</h1>

            <br/>

            <input type="text" placeholder="Enter task name to be added" onChange={(e)=>setNewTask(e.target.value)}/>
            <button onClick={()=>dispatch({type:'add_task',payload:newTask})}>Add Task</button>
            <ul>
                {
                    state.tasks &&  state.tasks.map(
                        (task) => (<li>
                            <span><input type="checkbox" onClick={()=>dispatch({type:'toggle_task',payload:task.id})}/></span>
                            <span>{task.title}</span>
                            <span><button onClick={()=>dispatch({type:'remove_task',payload:task.id})}>Remove Task</button></span>
                            </li>)
                    )
                }
                
            </ul>
        </div>
    )

    }

    export default CrudUsingReducer