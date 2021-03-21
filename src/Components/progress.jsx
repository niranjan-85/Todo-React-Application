import React from 'react'

const Progress = (props)=>{
    return(
    <>
        <div className="progress">
            <h2>Tasks Completed : {props.percentage}</h2>
        </div>
    </>   
)}

export default Progress