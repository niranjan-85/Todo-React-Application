import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Landing from './Components/LandingUI'
import Task from './Components/Tasks';

const App = ()=>{
    return(
        <div>
            <Landing />
            <Task />
        </div>
    )
}


const RootElement = document.querySelector('.wrapper')
ReactDOM.render(<App/>,RootElement)