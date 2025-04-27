import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      
    <div className = ' w-1/4 bg-red-300 py-6 px-9 rounded-lg'>
        <h2 className= "text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
    </div>

    <div className = ' w-1/4 bg-blue-300 py-6 px-9 rounded-lg'>
        <h2 className= "text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
    </div>

    <div className = ' w-1/4 bg-purple-300 py-6 px-9 rounded-lg'>
        <h2 className= "text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
    </div>

    <div className = ' w-1/4 bg-green-300 py-6 px-9 rounded-lg'>
        <h2 className= "text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
    </div>

    </div>
  )
}

export default TaskListNumber