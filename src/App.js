import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";



const Grocery = lazy(()=>import("./components/Grocery"));
const Appcontainer = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Appcontainer />,
    children:[
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/grocary",
    element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
  },
  {
    path:"/restaurantmenu/:resid",
    element:<Restaurantmenu/>
  },
    ],
    errorElement:<Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
