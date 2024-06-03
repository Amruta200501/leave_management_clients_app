import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../Allcss/ManagerProfile.css";

const ManagerProfile = () => {
  const { UserData } = useSelector((state) => state.user);

  const [allHolidays, setallHolidays] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/leavemanagementapi/allholiday")
      .then((result) => {
        console.log("DATA", result.data);
        setallHolidays(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "80px" }} className="Manager-Profile">
      <div className="managerProfile-Container">
         <div className="managerProfile-header">
          <h3>Manager Profile</h3>
          <img src={`http://localhost:5000${UserData.UserImage}`}className="managerProfile-img"/>
          <h4>{UserData.UserName}</h4>
         </div>

         <div className="managerinfo">
           <h5>{UserData.UserDesignation}</h5>
           <h5> {UserData.UserDepartment}</h5>
         </div>

         <div className="manager-div">
          <p>Manager Email:- {UserData.UserEmail}</p>
          <p>Manager Password:- {UserData.UserPassword}</p>
          <p>Manager Mobile No:- {UserData.UserMobileNo}</p>
          <p>Manager Salary:- {UserData.UserSalary}</p>
          <p>Manager Date Of Birth:- {UserData.UserDateOfBirth}</p>
          <p>Manager Gender:- {UserData.UserGender}</p>
         </div>
     </div>

      <div className="Holiday-div">
        <h2>Holiday Panel</h2>
         <Container>
          <Row>
            {allHolidays.map((allholidays) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className="Holiday-card">
                    <Card.Body>
                      <p>HolidayMonth:- {allholidays.HolidayMonth}</p>
                      <p>HolidayYear:- {allholidays.HolidayYear}</p>
                      <p>HolidayDay:- {allholidays.HolidayDay}</p>
                      <p>HolidayEvent:- {allholidays.HolidayEvent}</p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
         </Container>
      </div>
    </div>
  );
};

export default ManagerProfile;
