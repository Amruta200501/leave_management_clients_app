import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HROffcanva from "./HROffcanva";
import HRProfile from "./HRProfile";
import AddHoliday from "./AddHoliday";
import Employees from "./Employees";
import HRLeaves from "./HRLeaves";
import AddEmployees from "./AddEmployees";
import ApplyLeave from "./ApplyLeave";
import Login from "../Component/Login";

const HRRouting = () => {
  return (
    <>
      <HROffcanva />
      <>
        <Outlet />
      </>
    </>
  );
};

export default HRRouting;
