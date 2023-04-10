import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import Home from './component/home';
import Statistics from './component/Statistics';
import AppliedJobs from './component/AppliedJobs';
import Blog from './component/Blog';
import Homes from './component/Homes';
import JobDetails from './component/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Homes></Homes>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch("/jobs.json")
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
