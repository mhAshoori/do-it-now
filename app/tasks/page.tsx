'use client'

import React, { useState } from 'react'

const TasksPage = () => {
  const [tasks,setTasks] = useState(['do the code','deploy the project','drink a cup of coffee'])
  return (
    <main>
      <ul>
        {tasks.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </main>
  )
}

export default TasksPage