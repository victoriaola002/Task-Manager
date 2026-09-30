import React from 'react'
import HeroNewTask from '../Components/MyTask/HeroNewTask'
import UpdateTask from '../Components/MyTask/UpdateTask'

const MyTask = ({ tasks, setTasks }) => {
  return (
    <div>
        <HeroNewTask/>
        <UpdateTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default MyTask