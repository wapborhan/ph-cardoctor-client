import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/pages/signin/SignIn.jsx";
import SignUp from "../components/pages/signup/SignUp.jsx";
import App from "../App.jsx";
import ServicesDetails from "../components/home/services/ServicesDetails";
import BookServices from "../components/pages/bookservices/BookService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:3300/services"),
      },
      {
        path: "/services/:id",
        element: <ServicesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <BookServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/services/${params.id}`),
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      // {
      //   path: "book/:id",
      //   // element: <PrivateRoute><BookService></BookService></PrivateRoute>,
      //   // loader: ({ params }) =>
      //   //   fetch(`http://localhost:5000/services/${params.id}`),
      // },
      // {
      //   path: "bookings",
      //   // element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      // },
    ],
  },
]);

export default router;
