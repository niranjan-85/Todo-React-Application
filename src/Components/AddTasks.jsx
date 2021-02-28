import {React,useState} from 'react';
import AddTask from './Tasks';

const AddTasks = ()=>{
    let [tasks,setTasks] = useState([]);
    const AddTask = ()=>{
        let taskName = document.querySelector('.add-task');
        if(taskName.value === ""){
            taskName.classList.add('error');
        }
        else{
            taskName.classList.remove('error');
            setTasks(
                (initialList)=>{
                    return [...initialList,taskName.value]
                }
            )
            console.log(tasks)
            
        }
    }
    return(
        <>
            <div className="taskField">
                    <input type="text" className="add-task mx-3" placeholder="Add a new Task"></input>
                    <button onClick={AddTask}>+</button>
            </div>
        </>
    )
}

export default AddTasks;