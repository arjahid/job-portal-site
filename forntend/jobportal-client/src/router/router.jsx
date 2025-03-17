import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/sigin/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 Not found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element:<Signin></Signin>
      }
    ],
  },
]);
export default router;
