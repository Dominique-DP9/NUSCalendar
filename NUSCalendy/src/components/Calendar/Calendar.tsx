// import React from 'react'
// import Day from '../DayContainer/DayContainer.tsx'
// import EventCard from '../EventCard/EventCard.tsx'
import { useState, useEffect } from 'react'
import { useEvent } from '../../services/useEvent.tsx'
import { Header } from '../Header/Header.tsx'
import DayContainter from '../DayContainer/DayContainer.tsx'
import './Calendar.css'
import { SortBar } from '../Sidebar/SortBar/SortBar.tsx'
import { SortTime } from '../SortTime/SortTime.tsx'
import { Search } from '../Sidebar/Search/Search.tsx'


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
  const { fetchEvents, } = useEvent(0);
  const [event, setEvents] = useState<EventProp[]>([])
  const [time, setTime] = useState<string[]>()
  const [sortOldest, setSortOldest] = useState<boolean>(true)
  const [, setSearchTerm] = useState<string>("")

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
    if (sortOldest) {
      timeArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    } else {
      timeArr.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    } 
    setTime(timeArr)
    console.log(time)
  }

  useEffect(() => {
    getTime()
  }, [event, sortOldest])

  const handleSortTime = async () => {
      setSortOldest(!sortOldest)
  }

  return (
    <>
      <Header />
      <div className="Calendar">
        <div style={{ gridColumn: '1 / span 1' }}>
          <Search 
            setSearchTerm = {setSearchTerm}
          />
          <SortBar />
        </div>
        <div style={{ gridColumn: '2 / span 2' }}>
          <SortTime 
            handleSortTime = {handleSortTime}
          />
          <DayContainter
            events={event}
            times={time || []}
          />
        </div>
        {/* <EventCard {...event}></EventCard>
        <EventCard {...event}></EventCard> */}
        {/* <EventCard */}
      </div>

    </>
  )
}

export default Calendar