import React from 'react'
import HeroNew from '../Components/NewTask/HeroNew'
import InputTask from '../Components/NewTask/InputTask'

const NewTask = ({tasks, setTasks}) => {
  return (
    <div>
        <HeroNew/>
        <InputTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default NewTask