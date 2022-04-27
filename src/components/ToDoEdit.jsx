import React, {useState} from 'react'

const ToDoEdit = () => {
    
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)

    function changeHours(i) {
        setHours(hours + i);
    }
    function limH(i) {
        if (i>12) i=12;
        if (i<0) i=0;
        return(i)
    }
    function limM(i) {
        if (i>59) i=59;
        if (i<0) i=0;
        return(i)
    }
    function changeMinutes(i) {
        setMinutes(minutes + i);
    }
    return (
        <section className="ToDoEdit">
        <h1>Edit notes</h1>
        <div className="TimeDateBlock">
            <div className="Time">
                
                <div className="hours">
                    <button className="arrow_up" onClick={() => changeHours(+1)}></button>
                    <input className="hours_input" value={limH(hours)}></input>
                    <button className="arrow_down" onClick={() => changeHours(-1)}></button>
                </div>
                
                <span className="dot"></span>
                <span className="dot"></span>
                
                <div className="minutes">
                    <button className="arrow_up" onClick={() => changeMinutes(1)}></button>
                    <input className="minutes_input" value={limM(minutes)}></input>
                    <button className="arrow_down" onClick={() => changeMinutes(-1)}></button>
                </div>
                
            </div>
            <div className="Date">
                <div className="Month">
                    <h4>Month</h4>
                    <textarea></textarea>
                </div>
                <div className="Day">
                    <h4>Day</h4>
                    <textarea></textarea>
                </div>
                <div className="Year">
                    <h4>Year</h4>
                    <textarea></textarea>
                </div>
            </div>
        </div>
        <div className="NoteEditor">
            <textarea className="NoteBlock"></textarea>
            <button className="SaveBtn">Save</button>
        </div>
    </section>
    );
} 

export default ToDoEdit