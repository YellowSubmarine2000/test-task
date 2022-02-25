import React, {useState} from 'react'

const ToDoEdit = () => {
    
    const [hours,setHours] = useState(0)

    function changeTime(i) {
        setHours(hours + i);
    }
    return (
        <section className="ToDoEdit">
        <h1>Edit notes</h1>
        <div className="TimeDateBlock">
            <div className="Time">
                
                <div className="hours">
                    <button className="arrow_up" onClick={() => changeTime(+1)}></button>
                    <input className="hours_input">{hours}</input>
                    <button className="arrow_down" onClick={() => changeTime(-1)}></button>
                </div>
                
                <span className="dot"></span>
                <span className="dot"></span>
                
                <div className="minutes">
                    <button className="arrow_up"></button>
                    <input className="minutes_input"></input>
                    <button className="arrow_down"></button>
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