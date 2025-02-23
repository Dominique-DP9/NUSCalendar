import Calendar from "../Calendar/Calendar";
import AddEvent from "../AddEvent/AddEvent";
import App from "../../App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {
          index: true,
          element: <Calendar/>
        },
        {
            path: "/new",
            element: <AddEvent />,
        }
      ]
  },

];

export default routes;