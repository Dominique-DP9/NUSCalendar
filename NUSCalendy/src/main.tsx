import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import EventCard from './components/EventCard/EventCard.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './components/Routes/Routes.tsx';

// const event = {
//     id: 1,
//     title: "Residance!!!!!!!",
//     author: "Domz",
//     eventDate: "2025-03-10",
//     createdDate: "2025-02-20",
//     img: "https://thumb.photo-ac.com/3e/3ee6943610e29f5b124192e73d1a3418_t.jpeg",
//     desc: "I love dancing!!!",
//   }

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Calendar /> */}
    {/* <EventCard {...event} /> */}
    {/* Use routing to Calendar */}
    <RouterProvider router={router} />

    
  </StrictMode>,
)
