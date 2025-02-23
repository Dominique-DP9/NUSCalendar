//import React from 'react'
import { useEffect, useState } from 'react'
import "./DayContainer.css"
import { EventProp } from "../Calendar/Calendar.tsx"
import { formatTime } from "../../utilities/formatDay.ts"
import EventCard from '../EventCard/EventCard.tsx'
import { useEvent } from '../../services/useEvent.tsx'

const DayContainer = ({ events, times, searchTerm }: { events: EventProp[], times: string[], searchTerm: string }) => {
    const {fetchCats} = useEvent(0)
    const colors = ['rgb(255, 105, 97, 0.2)', 'rgb(255, 180, 128, 0.2)', 'rgb(248, 243, 141, 0.2)', 'rgb(66, 214, 164, 0.2)', 'rgb(8, 202, 209, 0.2)', 'rgb(89, 173, 246, 0.2)',
        'rgb(157, 148, 255, 0.2)', 'rgb(199, 128, 232, 0.2)']
    const buttColors = ['rgb(255, 105, 97, 0.5)', 'rgb(255, 180, 128, 0.5)', 'rgb(248, 243, 141, 0.5)', 'rgb(66, 214, 164, 0.5)', 'rgb(8, 202, 209, 0.5)', 'rgb(89, 173, 246, 0.5)',
            'rgb(157, 148, 255, 0.5)', 'rgb(199, 128, 232, 0.5)']    
    const [categories, setCategories] = useState<any[]>([])
    const emptyEvent : EventProp = {
        id: 0,
        title: "",
        time: "",
        description: "",
        category: "",
    }
    const [eventCard, setEventCard] = useState<EventProp>(emptyEvent)
    const [eCardVisible, setECardVisible] = useState<boolean>(false)

    const getCategories = async () => {
        const result = await fetchCats()
        setCategories(result)
        console.log(result)
    }

    useEffect(() => {
        getCategories()
    },[])

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
                                    return <button 
                                        className="event" 
                                        style={{backgroundColor: colors[categories.findIndex((e) => e.name == event.category)]}} 
                                        onClick={() => {handleButtonClick(event)}}
                                        >
                                        <div className="event-header">
                                            <div className="event-title">
                                                <p>{event.title}</p>
                                            </div>
                                            <div className="event-cat">
                                                <p className='cat'
                                                    style={{backgroundColor: buttColors[categories.findIndex((e) => e.name == event.category)]}}
                                                >{event.category}</p>
                                            </div>
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