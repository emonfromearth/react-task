import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:3001/tasks')
      const data = await res.json()

      setTasks(data)
    }

    fetchTasks()
  }, [])

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) =>{
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id)=> {
    const toggleTask = await fetchTask(id)
    const updtTask = {...toggleTask, completed: !toggleTask.completed}
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updtTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: data.completed} : task));
  }

  const addTask = async (obj) => {
    const res = await fetch('http://localhost:3001/tasks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    const data = await res.json()

    setTasks([...tasks, data]);
  }

  return (
    <div className='container'>
      <Header onAdd={()=> setShow(!show)} show={show}/>
      {show && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h2>No task</h2>}
    </div>
  );
}

export default App;
