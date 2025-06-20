import React from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] =  useState([
    {
      id: 1,
      title: "Aprender JavaScript",
      description: "Estudar JavaScript para criar aplicações web interativas.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Praticar lógica de programação",
      description: "Resolver desafios para melhorar o raciocínio lógico e estruturar melhor os códigos.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    }

  ])

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) =>{
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    })

    setTasks(newTasks)
  }

  return (
    <div className='w-screen h-screen bg-blue-700 p-6 flex justify-center'>
        <div className='w-[500px]'>
          <h1 className='text-3xl text-slate-100 font-bold text-center'>Todo List</h1>
          <AddTask/>
          <Tasks tasks = {tasks} onTaskClick={onTaskClick}/>
        </div>
    </div>
  )
}

export default App