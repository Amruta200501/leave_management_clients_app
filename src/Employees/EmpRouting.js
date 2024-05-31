import React from 'react'
import EmpOffcanvas from './EmpOffcanvas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeesProfile from './EmployeesProfile'
import MyLeaves from './MyLeaves'
import EmpProjects from './EmpProjects'
import Login from '../Component/Login'
import AddEmpLeaves from './AddEmpLeaves'



const EmpRouting = () => {
    return (
        <>
            <BrowserRouter>
                <EmpOffcanvas />
                <Routes>
                    <Route path='/empprofile' element={<EmployeesProfile />}></Route>
                    <Route path='/myleaves' element={<MyLeaves />}></Route>
                    <Route path='/empprojects' element={<EmpProjects />}></Route>
                    <Route path='/emplogin' element={<Login />}></Route>
                    <Route path='/addempleaves' element={<AddEmpLeaves />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default EmpRouting