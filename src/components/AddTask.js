import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [completed, setCompleted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === "" || day === ""){
            alert("Please enter all the fields");
        }
        else{
        onAdd({text, day, completed});
        setText("");
        setDay("");
        setCompleted(false);
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type="text" placeholder="Add Day" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Completed</label>
                <input type="checkbox" checked={completed} value={completed} onChange={(e) => setCompleted(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Add Task" className='btn-block btn' />
        </form>
    )
}

export default AddTask
