import React from "react";
import { useSelector } from "react-redux";
import '../Allcss/HRProfile.css'

const HRProfile = () => {
  const { UserData } = useSelector((state) => state.user);

  return (
    <div style={{ marginTop: "80px" }} className="HRProfile">
      <div className="HRProfile-content">
        <div className="HrProfile-header">
          <h3>HR Profile</h3>
          <img src={`http://localhost:5000${UserData.UserImage}`}className="HrProfile-img"/>
          <h4>{UserData.UserName}</h4>
          {/* <p>Designation:- {UserData.UserDesignation}</p> */}
          {/* <div className='name-div'>
            <p>Name:- {UserData.UserName}</p>
            <p>Designation:- {UserData.UserDesignation}</p>
          </div> */}
        </div>

        <div className="HRinfo">
          <h5>{UserData.UserDesignation}</h5>
          <h5> {UserData.UserDepartment}</h5>
        </div>
        
        <div className="HR-div">
          <p>HR Email:- {UserData.UserEmail}</p>
          <p>HR Password:- {UserData.UserPassword}</p>
          <p>HR Mobile No:- {UserData.UserMobileNo}</p>
          <p>HR Salary:- {UserData.UserSalary}</p>
          <p>HR Date Of Birth:- {UserData.UserDateOfBirth}</p>
          <p>HR Gender:- {UserData.UserGender}</p>
        </div>
      </div>
    </div>
  );
};

export default HRProfile;
