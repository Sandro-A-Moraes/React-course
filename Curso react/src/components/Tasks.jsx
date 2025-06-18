import { ChevronRightIcon } from 'lucide-react'
import React from 'react'

const Tasks = (props) => {
  return (
    <ul className='space-y-4 p-6 bg-slate-100 rounded-md shadow '>{props.tasks.map((task)=>
        <li key={task.id} className='flex gap-5'>
            <button onClick={()=>props.onTaskClick(task.id)} className={`bg-blue-100 text-black rounded-md p-2 flex justify-between items-center w-full ${task.isCompleted && 'line-through'}`}>
                {task.title}
            </button>
            <button className='bg-blue-400 p-2 rounded-xl hover:bg-blue-600 transition delay-75'>
                <ChevronRightIcon/>
            </button>
        
        </li>)}
    </ul>
    
  )
}

export default Tasks