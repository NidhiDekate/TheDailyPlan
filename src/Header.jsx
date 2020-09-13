import React, { useState } from 'react';
import './index.css';
let date = new Date().toDateString();
let time = new Date().toLocaleTimeString();
let hours = new Date().getHours();
let greeting = '';

if(hours >= 1 && hours <12){
  greeting = 'Good Morning !';
}else if(hours >= 12 && hours < 19){
  greeting = 'Good Afternoon!'
}else{
  greeting = 'Good Night!';
}
function Header() {
    let updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        uptime(time);
    }
    setInterval(updateTime, 1000);
    let time = new Date().toLocaleTimeString();
    const state = useState();
    const [ctime, uptime] = useState(time); 
  return (
    <>
    <div className="header">
        <div className="divLeft">
            <h3>My Daily</h3>
            <h1>PLAN</h1>
        </div>
        <div className="divCenter">
            <p className="greeting">{greeting}</p>
            <br />
            <div className="displayTime"> {date}, {ctime}</div> 
        </div>
        <div className="divRight">
        <p>Have fun <span> & get things <br /> done </span></p>
        </div>
        <div className="clear"></div>
    </div>
    </>
  );
}

export default Header;