'use client'
import React from 'react'
import './EventCard.css'

type Event = {
  id: number,
  title: string,
  author: string,
  eventDate: string,
  createdDate: string,x
  img: string,
  desc: string,
  setECardVisible: any,
}

const EventCard: React.FC<Event> = ({
  id,
  title,
  author,
  eventDate,
  createdDate,
  img,
  desc,
  setECardVisible,
}) => {
  const handleClose = () => {
    setECardVisible(false)
  }

  return (
    <div className ="card-bg">
      <div className="card-container" >
        {/* Card body */}
        <div className="card">
          {/* Card Image */}
          <div className="cardHeader">
            <img src={img} className="cardImg" alt={`Image of ${title}`} />
            <div className="notion-icon">
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L15 8H21L17 12L19 18L12 14L5 18L7 12L3 8H9L12 2Z" />
              </svg>
            </div>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => {handleClose()}}>
              <svg width="20" height="20" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="black" stroke-width="4" /></svg>
            </button>
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
    </div>
  )
}

export default EventCard