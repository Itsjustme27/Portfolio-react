import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home"; 
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/about',
      element: <About />
     },
     {
      path: '/contact',
      element: <Contact />
     }
  ]);

  return <RouterProvider router={router}/>
}