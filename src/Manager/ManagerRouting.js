import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManagerOffcanva from './ManagerOffcanva'
import ManagerProfile from './ManagerProfile'
import ManagerLeaves from './ManagerLeaves'
import ManagerEmployees from './ManagerEmployees'
import AddManagerLeaves from './AddManagerLeaves'
import ManagersProject from './ManagersProject'
import Login from '../Component/Login'

const ManagerRouting = () => {
    return (
        <>
            <BrowserRouter>
            <ManagerOffcanva />
            <Routes>
                    <Route path='/managerprofile' element={<ManagerProfile/>}></Route>
                    <Route path='/managerleaves' element={<ManagerLeaves/>}></Route>
                    <Route path='/manageremployees' element={<ManagerEmployees/>}></Route>
                    <Route path='/managersprojects' element={<ManagersProject/>}></Route>
                    <Route path='/addmanagerleaves' element={<AddManagerLeaves/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default ManagerRouting