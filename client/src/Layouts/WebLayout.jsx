import React from "react";
import { Home, About, Contact, Events } from "../pages";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

const WebLayout = () => {
  //   page list
  const WebRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/events",
      element: <Events />,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-red-300">
      {/* navigation menu  */}
      <Navbar />
      {/* Website body  */}
      <div className=" flex flex-col justify-between h-screen">
        <Routes>
          {WebRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default WebLayout;
