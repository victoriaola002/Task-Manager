import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
const HeroNew = () => {
  return (
    <div >
      <Link to="/mytask" className='flex items-center mx-auto w-10/12 my-5'>
       <ChevronLeft size={32} className='text-[#292929]'/>
        <h1 className='text-[#292929] text-4xl'>New Task</h1>
      </Link> 
    </div>
  )
}

export default HeroNew