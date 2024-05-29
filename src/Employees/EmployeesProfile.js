import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../Allcss/EmployeesProfile.css'


const EmployeesProfile = () => {

  const { UserData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()
  return (
    <div className='empProfile-Container' style={{ marginTop: '80px' }}>
      <div className='empProfile-div'>


        <img src={`http://localhost:5000${UserData.UserImage}`} />
        <p>Emp Name:- {UserData.UserName}</p>
        <p>Emp Email:- {UserData.UserEmail}</p>
        <p>Emp Password:- {UserData.UserPassword}</p>
        <p>Emp MobileNo:- {UserData.UserMobileNo}</p>
        <p>Emp Salary:- {UserData.UserSalary}</p>
        <p>Emp DateOfBirth:- {UserData.UserDateOfBirth}</p>
        <p>Emp Gender:- {UserData.UserGender}</p>
        <p>Emp Department:- {UserData.UserDepartment}</p>
        <p>Emp Designation:- {UserData.UserDesignation}</p>
        <p>Emp JoiningDate:- {UserData.UserJoiningDate}</p>
        <p>Emp ReleavingDate:- {UserData.UserReleavingDate}</p>
      </div>
    </div>
  )
}

export default EmployeesProfile