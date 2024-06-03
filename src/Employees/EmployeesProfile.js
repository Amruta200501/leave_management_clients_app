import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Allcss/EmployeesProfile.css'


const EmployeesProfile = () => {

  const { UserData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()
  return (
    <div style={{ marginTop: '80px' }} className='empProfile'>
      <div className='empProfile-Container'>

        <div className='empProfile-header'>
          <h3>Employee Profile</h3>
          <img src={`http://localhost:5000${UserData.UserImage}`} className='empProfile-img' />
          <h4>{UserData.UserName}</h4>
          {/* <p>Designation:- {UserData.UserDesignation}</p> */}
          {/* <div className='name-div'>
            <p>Name:- {UserData.UserName}</p>
            <p>Designation:- {UserData.UserDesignation}</p>
          </div> */}
        </div>


        <div className='empinfo'>
          <h5>{UserData.UserDesignation}</h5>
          <h5> {UserData.UserDepartment}</h5> 
        </div>
        <div className='emp-div'>
          <p>Emp Email:-  {UserData.UserEmail}</p>
          <p>Emp Password:-  {UserData.UserPassword}</p>
          <p>Emp Mobile No:-  {UserData.UserMobileNo}</p>
          <p>Emp Salary:-  {UserData.UserSalary}</p>
          <p>Emp Date Of Birth:-  {UserData.UserDateOfBirth}</p>
          <p>Emp Gender:-  {UserData.UserGender}</p>
        </div>

      </div>
    </div >
  )
}

export default EmployeesProfile