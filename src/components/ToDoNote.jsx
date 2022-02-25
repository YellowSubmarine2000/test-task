const ToDoNote = () => {
    return (
        <div className="Note">
            <div className="DTbox">
                <div className="L_date">
                    <span>17.02.2022</span>
                </div>
                <div className="L_time">
                    <span>16:34</span>
                </div>
            </div>
            <button className='close'>X</button>
            <div className="NoteText">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto hic pariatur labore! Eaque, minima deserunt repellendus repellat earum possimus ex illum nulla totam dicta quaerat beatae quod voluptatum hic! Nesciunt?</span>
            </div>
        </div>
    );
}