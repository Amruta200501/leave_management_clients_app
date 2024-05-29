import React from 'react'
import { useSelector } from 'react-redux'

const HRProfile = () => {

  const { UserData } = useSelector((state) => state.user)

  return (
    <div style={{ marginTop: '80px' }} className='HRProfile'>
      <div className='HRPProfile-content'>
        <h4>HR Profile</h4>

        
        <img src= {`http://localhost:5000${UserData.UserImage}`}/>
        <h5>HR Name :{UserData?.UserName}</h5>
        <h5>HR Email :{UserData?.UserEmail}</h5>
        <h5>HR Password :{UserData?.UserPassword}</h5>
        <h5>HR MobileNo :{UserData?.UserMobileNo}</h5>
        <h5>HR Salary :{UserData?.UserSalary}</h5>
        <h5>HR DateOfBirth :{UserData?.UserDateOfBirth}</h5>
        <h5>HR Gender :{UserData?.UserGender}</h5>
        <h5>HR Department :{UserData?.UserDepartment}</h5>
        <h5>HR Designation :{UserData?.UserDesignation}</h5>
        <h5>HR JoiningDate :{UserData?.UserJoiningDate}</h5>
        <h5>HR ReleavingDate :{UserData?.UserReleavingDate}</h5>

      </div>
    </div>
  )
}

export default HRProfile