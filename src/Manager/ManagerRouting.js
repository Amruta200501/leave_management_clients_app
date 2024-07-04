import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ManagerOffcanva from "./ManagerOffcanva";
import ManagerProfile from "./ManagerProfile";
import ManagerLeaves from "./ManagerLeaves";
import ManagerEmployees from "./ManagerEmployees";
import AddManagerLeaves from "./AddManagerLeaves";
import ManagersProject from "./ManagersProject";
import Login from "../Component/Login";

const ManagerRouting = () => {
  return (
    <>
      <ManagerOffcanva />
      <>
        <Outlet />
      </>
    </>
  );
};

export default ManagerRouting;
