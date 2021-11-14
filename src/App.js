import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Monday",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Vue",
      day: "Tuesday",
      completed: true,
    },
    {
      id: 3,
      text: "Learn Angular",
      day: "Wednesday",
      completed: false,
    }
  ]);

  function deleteTask(e) {
    setTasks(tasks.filter((task) => task.id !== e));
  }
  function toggleReminder(e){
    setTasks(tasks.map((task) => task.id === e ? {...task, completed: !task.completed} : task));
  }
  function addTask(obj) {
    setTasks([...tasks, { id: tasks.length + 1, ...obj }]);
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
