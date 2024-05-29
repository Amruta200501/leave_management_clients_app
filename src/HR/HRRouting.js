import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HROffcanva from './HROffcanva'
import HRProfile from './HRProfile'
import AddHoliday from './AddHoliday'
import Employees from './Employees'
import HRLeaves from './HRLeaves'
import AddEmployees from './AddEmployees'
import ApplyLeave from './ApplyLeave'

const HRRouting = () => {
  return (
    <>
    <BrowserRouter>
    <HROffcanva/>
    <Routes>
        <Route path='/hrprofile' element={<HRProfile/>}></Route>
        <Route path='/addholiday' element={<AddHoliday/>}></Route>
        <Route path='/employees' element={<Employees/>}></Route>
        <Route path='/hrleaves' element={<HRLeaves/>}></Route>
        <Route path='/addemployees' element={<AddEmployees/>}></Route>
        <Route path='applyleave' element={<ApplyLeave/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default HRRouting