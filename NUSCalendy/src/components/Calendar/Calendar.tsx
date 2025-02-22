// import React from 'react'
// import Day from '../DayContainer/DayContainer.tsx'
import EventCard from '../EventCard/EventCard.tsx'
import React, { useState, useEffect } from 'react'
import { useEvent } from '../../services/useEvent.tsx'
import DayContainter from '../DayContainer/DayContainer.tsx'
import './Calendar.css'


export interface EventProp {
  id: number;
  title: string;
  time: string;
  description: string;
}

// const event = {
//     id: 1,
//     title: "Residance!!!!!!!",
//     author: "Domz",
//     eventDate: "2025-03-10",
//     createdDate: "2025-02-20",
//     img: "https://thumb.photo-ac.com/3e/3ee6943610e29f5b124192e73d1a3418_t.jpeg",
//     desc: "I love dancing!!!",
//   }
const Calendar = () => {
    const {fetchEvents, fetchOneEvent} = useEvent(0);
    const [event, setEvents] = useState<EventProp[]>([])
    const [time, setTime] = useState<string[]>()
    const getEvent = async () => {
        try {
            const result = await fetchEvents()
            setEvents(result)
            console.log(result)
        } catch {
            console.log('Error fetching Events')
        }   
    }

    useEffect(() => {
        getEvent()
      }, [])

    const getTime = async () => {
        const arr = event.map((e) => e.time)
        const timeArr = [...new Set(arr)]
        timeArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
        setTime(timeArr)
        console.log(time)
    }

    useEffect(() => {
        getTime()
    },[])

  return (
    <>
    <div className="Calendar">
        Calendar
        <div>Timeline (insert calendar here)</div> 
        <div> card card </div>
        <DayContainter
                events = {event}
            />    
        {/* <EventCard {...event}></EventCard>
        <EventCard {...event}></EventCard> */}
        {/* <EventCard */}
    </div>
    
    </>
  )
}

export default Calendar