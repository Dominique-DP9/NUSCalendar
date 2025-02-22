'use client'
import React from 'react'
import './EventCard.css'


type Event = {
  id: number,
  title: string,
  author: string,
  eventDate: string,
  createdDate: string, 
  img: string,
  desc: string
}

const EventCard: React.FC<Event> = ({
  id,
  title,
  author,
  eventDate,
  createdDate,
  img,
  desc,
}) => {

  return (
    <div className="card-container"> 
      {/* Card body */}
      <div className="card">
        {/* Card Image */ }
        <div className="cardHeader"> 
          <img src={img} className="cardImg" alt={`Image of ${title}`} />
          <div className="notion-icon">
            <svg width="40" height="40" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L15 8H21L17 12L19 18L12 14L5 18L7 12L3 8H9L12 2Z"/>
            </svg>
          </div>
        </div>

        {/* Card Details */}
        <div className="cardContents">
          <h2 className="cardTitle">{title} // Todo: Style both the title and description texts</h2> 
          <h4 className="cardMeta"><i> Event date: </i> {eventDate}  </h4>
          <hr></hr>
          <h4 className='cardDesc'>{desc}</h4>
          <div className='cardMeta'>
            <span><strong>Creator: {author} </strong>| </span>
            
            <span><i> Date created:</i> {createdDate} | </span>
            <span><i> Event Number: #</i> {id.toString()}</span>
            {/* <p>{id.toString()}</p> */}
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default EventCard