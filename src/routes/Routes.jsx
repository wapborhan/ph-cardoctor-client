import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/pages/signin/SignIn.jsx";
import SignUp from "../components/pages/signup/SignUp.jsx";
import App from "../App.jsx";
import PrivateRoute from "./PrivateRoute";
import ServicesDetails from "../components/home/services/ServicesDetails";
import BookServices from "../components/pages/bookservices/BookService";
import Bookings from "../components/pages/bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
        // loader: () => fetch("http://localhost:3300/services"),
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/services/:id",

        element: (
          <PrivateRoute>
            <ServicesDetails />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <BookServices />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/services/${params.id}`),
      },

      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
