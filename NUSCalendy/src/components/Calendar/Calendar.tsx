// import React from 'react'
// import Day from '../DayContainer/DayContainer.tsx'
// import EventCard from '../EventCard/EventCard.tsx'
import { useState, useEffect } from 'react'
import { useEvent } from '../../services/useEvent.tsx'
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
  category: string;
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
  const { fetchEvents } = useEvent(0);
  const [event, setEvents] = useState<EventProp[]>([])
  const [time, setTime] = useState<string[]>()
  const [sortOldest, setSortOldest] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);

  const getEvent = async () => {
    try {
      const result = await fetchEvents(searchTerm)
      const arr = result.filter((e:EventProp) => (e.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      e.description?.toLowerCase().includes(searchTerm.toLowerCase())))
      setEvents(arr)
      console.log(result)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEvent()
  }, [searchTerm, selectedCategories])

  const getTime = async () => {
    const arr = event.map((e) => e.time)
    const timeArr = [...new Set(arr)]
    if (sortOldest) {
      timeArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    } else {
      timeArr.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    } 
    setTime(timeArr)
  }

  useEffect(() => {
    getTime()
  }, [event, sortOldest])

  const handleSortTime = async () => {
      setSortOldest(!sortOldest)
  }

  return (
    <>
      <div className="Calendar">
        <div style={{ gridColumn: '1 / span 1' }}>
          <Search 
            setSearchTerm = {setSearchTerm}
          />
          <SortBar 
            selectedCategories = {selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div style={{ gridColumn: '2 / span 2' }}>
          <SortTime 
            handleSortTime = {handleSortTime}
            sortOldest={sortOldest}
          />
          <DayContainter
            events={event}
            times={time || []}
            selectedCategories = {selectedCategories}
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