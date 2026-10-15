import React, {useState} from 'react'
import HeroNewTask from '../Components/MyTask/HeroNewTask'
import UpdateTask from '../Components/MyTask/UpdateTask'
import taskSearch from '../Components/MyTask/taskSearch'


const MyTask = ({ tasks, setTasks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <taskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <HeroNewTask/>
        <UpdateTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default MyTask