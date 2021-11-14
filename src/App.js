import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Monday",
      reminder: "2020-01-01",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Vue",
      day: "Tuesday",
      reminder: "2020-01-01",
      completed: true,
    },
    {
      id: 3,
      text: "Learn Angular",
      day: "Wednesday",
      reminder: "2020-01-01",
      completed: false,
    }
  ]);

  function deleteTask(e) {
    setTasks(tasks.filter((task) => task.id !== e));
  }
  function toggleReminder(e){
    setTasks(tasks.map((task) => task.id === e ? {...task, completed: !task.completed} : task));
  }
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h2>No task</h2>}
    </div>
  );
}

export default App;
