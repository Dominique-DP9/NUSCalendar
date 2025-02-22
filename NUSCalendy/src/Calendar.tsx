import React, { useState, useEffect } from 'react'
import { Header } from './components/Header.tsx'
import { useEvent } from './services/useEvent.tsx'
import DayContainter from './components/DayContainer.tsx'

export interface EventProp {
    id: number;
    title: string;
    time: string;
    description: string;
  }

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
    <Header/>
    <div className="Calendar">
        Calendar
        <div>Timeline (insert calendar here)
            <DayContainter
                events = {event}
            />    
        </div> 
    </div>
    </>
  )
}

export default Calendar