//import React from 'react'
import "./DayContainer.css"
import { EventProp } from "../Calendar/Calendar.tsx"
import { formatDay } from "../../utilities/formatDay.ts"

const DayContainer = ({ events, times }: { events: EventProp[], times: string[] }) => {
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

    return <>
    {
        times.map((time) => {
            const day = new Date(time).getDay()
            console.log(day)
            return <>
                <div className="day-container">
                    <div className="day-title">{formatDay(day)}</div>
                    <div className="event-container">
                        {
                            events
                                .filter((event) => event.time == time)
                                .map((event) => {
                                    return <button className="event" onClick={() => { }}>
                                        <div className="event-title">{event.title}</div>
                                        <div className="event-description">{event.description}</div>
                                    </button>
                                })
                        }
                    </div>
                </div>
            </>
        })
    }
    </>
}

export default DayContainer