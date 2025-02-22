//import React from 'react'
import "./DayContainer.css"
import { EventProp } from "../Calendar/Calendar.tsx"

const DayContainer = ({ events }: { events: EventProp[] }) => {
    // const handleButtonClick = (task) => {
    //     const temp = 0
    // }
    const Events = [
            {
                id: 1,
                date: "Monday",
                name: "Event",
                details: "Description",
            },
            {
                id: 2,
                date: "Tuesday",
                name: "Event",
                details: "Description",
            },
            {
                id: 3,
                date: "Tuesday",
                name: "Event",
                details: "Description",
            },
            {
                id: 4,
                date: "Tuesday",
                name: "Event",
                details: "Description",
            },
        ]

    return (
        <>
            <div className="day-container">
                <div className="day-title">Day</div>
                    <div className="event-container">
                        {events
                        //.filter((event) => event.time == "Monday")
                            .map((event) => {
                            return <button className="event" onClick={() => { }}>
                                        <div className="event-title">{event.title}</div>
                                        <div className="event-description">{event.description}</div> 
                                    </button>
                        })} 
                </div>
            </div>
        </>
    )
}

export default DayContainer