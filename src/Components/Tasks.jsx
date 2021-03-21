import {React,useState,useEffect} from 'react';
import sleep from './images/sleep.jpg'
import checkImg from './images/checked.png'
import uncheckImg from './images/notchecked.png'
import get_date from './Helper';


const Task = ()=>{
    let [tasks,setTasks] = useState([]);
    let [idCounter,setID] = useState(0);
    let [percentage,setpercentage] = useState(0);

    // Calculate percentage  

    useEffect(()=>{
        let check = 0 ;
        tasks.map((item)=>{
            if(item.checked) check++;
        })
        setpercentage(Math.round(check/tasks.length *100));
    },[tasks]);

    // give an unique id to each item

    const generateId = ()=>{
        setID(idCounter+1);
        return idCounter;
    }

    // add a task via input

    const AddTask = ()=>{
        let taskName = document.querySelector('.add-task');
        let task_buffer = taskName.value;
        if(taskName.value === ""){
            taskName.classList.add('error');
        }
        else{
            taskName.value = "";
            taskName.classList.remove('error');
            setTasks(
                (initialList)=>{
                    return [...initialList,{'id':generateId(),'taskdet':task_buffer,'checked':0}]
                }
            )
        }
    }
    
    // if user deletes a task

    const deleteTask = (id)=>{
        const UpdatedTasks = tasks.filter((TaskObj)=>TaskObj.id !== id)
        setTasks(UpdatedTasks);
    }

    // if user completes the task

    const CompleteTask=(id)=>{
        setTasks(
            tasks.map(
                (item)=>{
                    if(item.id === id){
                        if(item.checked){
                            return{
                                ...item,
                                checked:0
                            }
                        }
                        return{
                            ...item,
                            checked:1
                        }
                    }
                    return item;
                }
            )
        )
    }

    // If the task list is empty 

    if(tasks.length === 0){
        return(
            <>
            <div className="container-fluid mt-5 px-5 task-wrap pt-4" id="todo">
                <div className="greet mb-5 mt-4">
                    <h1 className="greetuser mt-5"></h1>
                    <h2>{get_date()}</h2>
                </div>
                <div className="container-fluid">
                    <div className="empty-taskbar d-flex flex-column align-items-center justify-content-center">
                        <img src={sleep}></img>
                        <h4 className="mt-5">No Tasks added Yet !</h4>
                    </div>
                </div>
                <div className="taskField">
                        <input type="text" className="add-task mx-3" placeholder="Add a new Task"></input>
                        <button onClick={AddTask}>+</button>
                </div>
            </div>
        </>
        )
    }

    // Tasks added

    return(
        <>
            <div className="container-fluid mt-5 px-5 task-wrap pt-4">
                <div className="greet mb-5 mt-4">
                    <h1 className="greetuser"></h1>
                    <h2>{get_date()}</h2>
                    <h2>Tasks Completed : {percentage}%</h2>
                </div>
                <div className="container-fluid ">
                    <div className="tasks">
                        {
                            tasks.map(
                                (TaskAdded)=>{
                                    return(
                                        <div className="TaskAdded">

                                            {/* change image from '!' -> 'tickmark' */}

                                            <img src={`${TaskAdded.checked ? checkImg:uncheckImg}`}></img>

                                            {/* Add the Taskname to UI */}
                                            {/* strike out text if completed */}

                                            <label for="taskadded" className={`${TaskAdded.checked ? "checked d" : "notchecked d"}`}>
                                                {TaskAdded.taskdet}
                                            </label>

                                            {/* delete and check buttons */}

                                            <button className="check" onClick={()=>CompleteTask(TaskAdded.id)}>
                                                &gt;
                                            </button>
                                            <button className="delete" onClick={()=>deleteTask(TaskAdded.id)}>X</button>
                                        </div>
                                    )
                                }
                            )
                        }
                        <div id="scroll"></div>
                    </div>
                </div>
                <div className="taskField">
                        <input type="text" className="add-task mx-3" placeholder="Add a new Task"></input>
                        <button onClick={AddTask}><a href="#scroll">+</a></button>
                </div>
            </div>
        </>
    )
}

export default Task;