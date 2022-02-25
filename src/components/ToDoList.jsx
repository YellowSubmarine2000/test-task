import '../assets/bckimg.jpg'

const ToDoList = ({date,time,content}) => {
    return (
        <section className="ToDoList">
        <h1>To do list</h1>
        <div className="Note">
            <div className="DTbox">
                <div className="L_date">
                    <span>{date}</span>
                </div>
                <div className="L_time">
                    <span>{time}</span>
                </div>
            </div>
            <button className='close'>X</button>
            <div className="NoteText">
                <span>{content}</span>
            </div>
        </div>
    </section>
    );
}

export default ToDoList