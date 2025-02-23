import Calendar from "../Calendar/Calendar";
import { AddEvent } from "../AddEvent/AddEvent";

const routes = [
  {
    path: "/",
    element: <Calendar />,
    children: [
      {
        path: "/new",
        element: <AddEvent />,
      },
    ]
  }
];

export default routes;