import React, { Children } from "react";
import Login from "./Component/Login";
import Mainlayout from "./Component/Mainlayout";
import EmployeesProfile from "./Employees/EmployeesProfile";
import MyLeaves from "./Employees/MyLeaves";
import EmpProjects from "./Employees/EmpProjects";
import AddEmpLeaves from "./Employees/AddEmpLeaves";
import EmpRouting from "./Employees/EmpRouting";
import HRRouting from "./HR/HRRouting";
import ManagerRouting from "./Manager/ManagerRouting";
import ManagerProfile from "./Manager/ManagerProfile";
import AddEmployees from "./HR/AddEmployees";
import Employees from "./HR/Employees";
import ManagerLeaves from "./Manager/ManagerLeaves";
import ManagerEmployees from "./Manager/ManagerEmployees";
import ManagersProject from "./Manager/ManagersProject";
import AddManagerLeaves from "./Manager/AddManagerLeaves";
import { Route, Routes } from "react-router-dom";
import ApplyLeave from "./HR/ApplyLeave";
import HRLeaves from "./HR/HRLeaves";
import AddHoliday from "./HR/AddHoliday";
import HRProfile from "./HR/HRProfile";

const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/emp",
    element: <EmpRouting />,
    children: [
      { path: "empprofile", element: <EmployeesProfile /> },
      { path: "myleaves", element: <MyLeaves /> },
      { path: "empprojects", element: <EmpProjects /> },
      { path: "addempleaves", element: <AddEmpLeaves /> },
    ],
  },

  {
    path: "/hr",
    element: <HRRouting />,
    children: [
      { path: "hrprofile", element: <HRProfile /> },
      { path: "addholiday", element: <AddHoliday /> },
      { path: "employees", element: <Employees /> },
      { path: "hrleaves", element: <HRLeaves /> },
      { path: "addemployees", element: <AddEmployees /> },
      { path: "applyleave", element: <ApplyLeave /> },
    ],
  },

  {
    path: "/manager",
    element: <ManagerRouting />,
    children: [
      { path: "managerprofile", element: <ManagerProfile /> },
      { path: "managerleaves", element: <ManagerLeaves /> },
      { path: "manageremployees", element: <ManagerEmployees /> },
      { path: "addmanagerleaves", element: <AddManagerLeaves /> },
      { path: "managersprojects", element: <ManagersProject/> },
    ],
  },
];

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
