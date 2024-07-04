import React from "react";
import EmpOffcanvas from "./EmpOffcanvas";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import EmployeesProfile from "./EmployeesProfile";
import MyLeaves from "./MyLeaves";
import EmpProjects from "./EmpProjects";
import Login from "../Component/Login";
import AddEmpLeaves from "./AddEmpLeaves";

const EmpRouting = () => {
  return (
    <>
      <EmpOffcanvas />
      <>
        <Outlet />
      </>
    </>
  );
};

export default EmpRouting;
