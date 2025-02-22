import { useState, useEffect } from 'react'
import.meta.env.VITE_API_URL

export const useEvent = (eventID: number) => {
  // const [tasks, setTasks] = useState([])
  const API_URL = import.meta.env.VITE_API_URL
  const fetchEvents = async () => {
    //const sortMethod = queryObject ? `${queryObject.sort}` : ""
    try {
      const res = await fetch(`${API_URL}`) 
      const data = await res.json()
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      console.log(data)
      return data 
    } catch (error){
      console.error("Fetch Events Error:", error)
      return null
    }
    
  }
  
  const fetchOneEvent = async (id: number) => {
    console.log("data")
    const res = await fetch(`${API_URL}/${id}`)
    const data = await res.json()
    return data
  }

  // const addTask = async (task: { text: any; dueDate: any }) => {
  //   const newTask = {
  //     name: task.text,
  //     description: task.dueDate || "",
  //     time: "",
  //     imp: 0
  //   }
  //   const res = await fetch(process.env.REACT_APP_PATH, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(newTask),
  //   })
  // }

  // const deleteTask = async (id: number) => {
  //   const res = await fetch(`${process.env.REACT_APP_PATH}/${id}`, {
  //     method: 'DELETE',
  //   })
  //   res.status === 200
  //     ? setTasks(tasks.filter((task) => task.id !== id))
  //     : alert('Error Deleting Task')
  // }

  return {
    fetchEvents,
    fetchOneEvent,
    //addTask,
    //deleteTask,
    //tasks
  }
}
