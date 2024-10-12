import { useState } from "react"

const Crud = () => {
    const [task, setTask] = useState([{
        id:Date.now(),
        title:'My Task ',
        toggleStatus:true

    }])
    //Setting State to handle the Temp Task 
    const [tempTask, setTempTask] = useState();
    //Function to Add Task 
    const addTask = () =>{
        const updatedTask = {
            id:Date.now(),
            title:tempTask,
            toggleStatus:true
        }
        setTask([...task,updatedTask])

    }
    //Function to Remove Task
    const removeTask = (id) =>{
        const updatedTask = task.filter((item)=>item.id != id)
        setTask(updatedTask)
    } 
    //Function to Toggle Task
    const toggleTask = (id) => {
        const updatedTask = task.map(
            (item) => item.id === id ? {...item,toggleStatus:!item.toggleStatus}:item
        )
        setTask(updatedTask)
    } 
return (
    <div>
        <h1>Welcome to Task Managemet</h1>
        <br/>
        <input type="text" value={tempTask} onChange={(e)=>setTempTask(e.target.value)}/>
        <button onClick={addTask}>Add Task </button>
        <ul>
            {
                task.map(
                    (item)=>(
                            <li key={item.id}>
                            <span><input type="checkbox" checked={item.toggleStatus} onChange={()=>toggleTask(item.id)}/></span>
                            <span>{item.title}</span>
                            <span><button onClick={()=>removeTask(item.id)}>Remove</button></span>
                            </li>
                    )
                )
                }
        </ul>
    </div>
)
}

export default Crud