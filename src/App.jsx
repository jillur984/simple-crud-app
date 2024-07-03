import React, { useState } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { initialTasks } from './components/data/tasks'

export default function App() {

  const [tasks,setTasks]=useState(initialTasks)

  const getNextId=(data)=>{
    const maxId=data.reduce((prev,current)=> prev.id > current.id ? prev.id : current.id)
    return maxId+1
  }

  const handleAddTask=(text)=>{
     setTasks([
      ...tasks,
      {
       id:getNextId(tasks),
       text:text,
       done:false
      }
     ])
  }

  const handleChangeTask=(task)=>{
    const nextTasks=tasks.map((t)=>{
      if(task.id==t.id)
        return task
      else
      return t
    })
    setTasks(nextTasks)
  }

  const handleDeletetask=(taskId)=>{
    setTasks(tasks.filter((t)=>t.id!==taskId))
  }
  return (
    <>
    <h1>To Add App</h1>
   <AddTask onAdd={handleAddTask}/>
   <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeletetask}/>
    
    </>
  )
}
