import {React,useState,useEffect} from 'react';
import sleep from './images/sleep.jpg'
import checkImg from './images/checked.png'
import uncheckImg from './images/notchecked.png'

const Task = ()=>{
    let [tasks,setTasks] = useState([]);
    let [idCounter,setID] = useState(0);

    const generateId = ()=>{
        setID(idCounter+1);
        return idCounter;
    }


    const AddTask = ()=>{
        let taskName = document.querySelector('.add-task');
        if(taskName.value === ""){
            taskName.classList.add('error');
        }
        else{
            taskName.classList.remove('error');
            let i=0;
            setTasks(
                (initialList)=>{
                    return [...initialList,{'id':generateId(),'taskdet':taskName.value,'checked':0}]
                }
            )
        }
    }

    const deleteTask = (id)=>{
        const UpdatedTasks = tasks.filter((TaskObj)=>TaskObj.id !== id)
        setTasks(UpdatedTasks)
    }

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
                        else{
                            return{
                                ...item,
                                checked:1
                            }
                        }
                    }
                    return item;
                }
            )
        )
    }

    if(tasks.length === 0){
        return(
            <>
            <div className="container-fluid px-5 task-wrap" id="todo">
                <div className="greet mb-5 mt-4">
                    <h1>All Tasks</h1>
                    <h5 className="greetuser"></h5>
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
    return(
        <>
            <div className="container-fluid task-wrap">
                <div className="greet mb-5 mt-4">
                    <h1>All Tasks</h1>
                    <h5 className="greetuser"></h5>
                </div>
                <div className="container-fluid ">
                    <div className="tasks">
                        {
                            tasks.map(
                                (TaskAdded)=>{
                                    return(
                                        <div className="TaskAdded">
                                            <img src={`${TaskAdded.checked ? checkImg:uncheckImg}`}></img>
                                            <label for="taskadded" className={`${TaskAdded.checked ? "checked" : "notchecked"}`}>{TaskAdded.taskdet}</label>
                                            <button className="check" onClick={()=>CompleteTask(TaskAdded.id)}>
                                                O
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
                <div className="taskField ">
                        <input type="text" className="add-task mx-3" placeholder="Add a new Task"></input>
                        <button onClick={AddTask}><a href="#scroll">+</a></button>
                </div>
            </div>
        </>
    )
}

export default Task;