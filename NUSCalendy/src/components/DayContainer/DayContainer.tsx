//import React from 'react'
import { useState } from 'react'
import "./DayContainer.css"
import { EventProp } from "../Calendar/Calendar.tsx"
import { formatTime } from "../../utilities/formatDay.ts"
import EventCard from '../EventCard/EventCard.tsx'

const DayContainer = ({ events, times, searchTerm }: { events: EventProp[], times: string[], searchTerm: string }) => {
    const emptyEvent : EventProp = {
        id: 0,
        title: "",
        time: "",
        description: "",
        category: "",
    }
    const [eventCard, setEventCard] = useState<EventProp>(emptyEvent)
    const [eCardVisible, setECardVisible] = useState<boolean>(false)

    const handleButtonClick = (event: EventProp) => {
        setEventCard(event)
        setECardVisible(!eCardVisible)
    }

    return <>
    {
        times.map((time) => {
            return <>
                <div className="day-container">
                    <div className="day-title">{formatTime(time)}</div>
                    <div className="event-container">
                        {
                            events
                                .filter((event) => event.time == time 
                                    // && (event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                    // event.description.toLowerCase().includes(searchTerm.toLowerCase()))
                                )
                                .map((event) => {
                                    return <button className="event" onClick={() => {handleButtonClick(event)}}>
                                        <div>
                                            <div className="event-title">{event.title}</div>
                                            <div className="event-cat">{event.category}</div>
                                        </div>
                                        <div className="event-description">{event.description}</div>
                                    </button>
                                })
                        }
                    </div>
                </div>
            </>
        })
    }
    {eCardVisible &&
        <EventCard
        id = {eventCard?.id}
        title = {eventCard?.title}
        author = {eventCard?.title}
        eventDate = {eventCard?.time}
        createdDate = {eventCard?.time}
        img = {eventCard?.title}
        desc = {eventCard?.description}
        setECardVisible={setECardVisible}
    />
    }
    </>
}

export default DayContainer