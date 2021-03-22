import React, { useEffect, useState } from 'react';
import LandingLogo from './images/landinglogo.png';
import UserLogo from './images/user.png';

const Landing = ()=>{

    useEffect(()=>{
        document.querySelector('.task-wrap').classList.add('main')
    })

    const handleError = (event)=>{
        const Username = document.querySelector('.username');
        if(Username.value === ""){
            event.preventDefault();
            Username.classList.add('error');
        }
        else{
            Username.classList.remove('error');
            if(document.querySelector('.main')) document.querySelector('.main').classList.remove('main');
            document.querySelector('.greetuser').innerHTML = `Welcome ${Username.value} !`;
        }
    }

    return (
        <>
            <div className="container-fluid landing-wrap d-flex align-items-center justify-content-center">
                <div className="landingSection">
                    <div className="logo">
                        <h3>
                            <img src={LandingLogo}></img>
                        </h3>
                    </div>
                    <div className="text-center banner mt-3 mb-2">
                        <h1 className="mb-3">Organize Your Tasks</h1>
                        <p>Want to increase your Productivity ? <br></br> Start organizing your Tasks efficiently with TaskElimanator !</p>
                    </div>
                    <div className="Form d-flex align-items-center justify-content-center mt-5 mb-5">
                        <label htmlFor="Username" className="mx-3">
                            <img src={UserLogo}></img>
                        </label>
                        <input type="text" placeholder="Username" className="ml-3 username"></input>
                    </div>
                    <div className="text-center primary-btn">
                        <a href="#todo" onClick={handleError}>
                            <button className="px-4 py-2">
                                Lets Start
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;