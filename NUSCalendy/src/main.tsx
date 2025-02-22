import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import Calendar from './components/Calendar/Calendar.tsx'
// import EventCard from './components/EventCard/EventCard.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Calendar />
    
  </StrictMode>,
)
