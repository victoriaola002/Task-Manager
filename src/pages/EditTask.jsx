import React from 'react'
import HeroEdit from '../Components/EditTask/HeroEdit'
import InputEdit from '../Components/EditTask/InputEdit'

const EditTask = ({ tasks, setTasks }) => {
  return (
    <div>
        <HeroEdit/>
        <InputEdit tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default EditTask