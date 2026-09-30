import React from 'react'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
const HeroNewTask = () => {
  return (
    <div className='mx-auto w-10/12 flex justify-between '>
        <h1 className='text-4xl font-medium text-[#292929]'>My Task</h1>
        <Link to="/newtask"className='flex gap-2 items-center'>
        <PlusIcon size={18} className='text-[#974FD0]'/>
        <p className='text-[#974FD0] font-medium '>Add New Task</p>
        </Link>
    </div>
  )
}

export default HeroNewTask