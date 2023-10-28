import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/pages/signin/SignIn.jsx";
import SignUp from "../components/pages/signup/SignUp.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("/services.json"),
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
