// import { useState, useEffect } from 'react'
// import.meta.env.VITE_API_URL

export const useEvent = (eventID: number) => {
  // const [tasks, setTasks] = useState([])
  console.log(eventID)
  const API_URL = import.meta.env.VITE_API_URL
  const fetchEvents = async (searchTerm: string) => {
    //const sortMethod = queryObject ? `${queryObject.sort}` : ""
    try {
      const res = await fetch(`${API_URL}/events/?q=${searchTerm}`) 
      const data = await res.json()
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      // console.log(data)
      return data 
    } catch (error){
      console.error("Fetch Events Error:", error)
      return null
    }
    
  }

  const fetchCats = async () => {
    //const sortMethod = queryObject ? `${queryObject.sort}` : ""
    try {
      const res = await fetch(`${API_URL}/categories`) 
      const data = await res.json()
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      // console.log(data)
      return data 
    } catch (error){
      console.error("Fetch Events Error:", error)
      return null
    }
    
  }

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
    fetchCats,
    //addTask,
    //deleteTask,
    //tasks
  }
}
