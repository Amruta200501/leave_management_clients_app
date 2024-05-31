import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Allcss/ManagerProfile.css'


const ManagerProfile = () => {

    const { UserData } = useSelector((state) => state.user)

    const [allHolidays, setallHolidays] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/leavemanagementapi/allholiday")
            .then((result) => {
                console.log("DATA", result.data);
                setallHolidays(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div style={{ marginTop: '80px' }} className='Manager-Profile'>
            <div>
                <h4>Manager Profile</h4>

                <img src= {`http://localhost:5000${UserData.UserImage}`}/>
                <h5>Manager Name :{UserData.UserName}</h5>
                <h5>Manager Email :{UserData.UserEmail}</h5>
                <h5>Manager Password :{UserData.UserPassword}</h5>
                <h5>Manager MobileNo :{UserData.UserMobileNo}</h5>
                <h5>Manager Salary :{UserData.UserSalary}</h5>
                <h5>Manager DateOfBirth :{UserData.UserDateOfBirth}</h5>
                <h5>Manager Gender :{UserData.UserGender}</h5>
                <h5>Manager Department :{UserData.UserDepartment}</h5>
                <h5>Manager Designation :{UserData.UserDesignation}</h5>
            </div>
            <div className='Holiday-div'>
                <Container>
                    <Row>
                        {
                            allHolidays.map((allholidays) => {
                                return (
                                    <Col sm={12} md={9} lg={3}>
                                        <Card className='Holiday-card'> 
                                            <Card.Body>
                                                <p>HolidayMonth:-  {allholidays.HolidayMonth}</p>
                                                <p>HolidayYear:-  {allholidays.HolidayYear}</p>
                                                <p>HolidayDay:-  {allholidays.HolidayDay}</p>
                                                <p>HolidayEvent:-  {allholidays.HolidayEvent}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })
                        }
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default ManagerProfile