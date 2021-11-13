import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.completed ? 'reminder':''}`} onDoubleClick={()=> onToggle(task.id)}>
            <h3>Title: {task.text} <FaTimes onClick={() => onDelete(task.id)}/></h3>
            <p>Day: {task.day}</p>
            <p>Time: {task.reminder}</p>
        </div>
    )
}

export default Task
