import React from "react";
import { useRoutes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

function Router() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addUser",
      element: <AddUser />,
    },
    {
      path: "/editUser/:id",
      element: <EditUser />,
    },
  ]);

  return element;
}

export default Router;
