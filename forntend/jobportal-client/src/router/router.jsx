import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/sigin/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import Myapplcation from "../pages/myApplication/Myapplcation";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob";
import AllJob from "../pages/AllJob/AllJob";
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
        path: "/jobs",
        element: <AllJob></AllJob>,
      },
      {
        path:'jobs/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://job-portal-backend.onrender.com/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path:'myApplication',
        element:<PrivateRoute><Myapplcation></Myapplcation></PrivateRoute>
      },
      {
      path: "addJob",
      element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
      path: "myPostedJobs",
      element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
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
