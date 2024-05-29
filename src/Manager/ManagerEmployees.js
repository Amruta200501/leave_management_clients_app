import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import '../Allcss/Manageremp.css'



const ManagerEmployees = () => {

    const [allManagers, setallManagers] = useState([])
    const [showSelected, setshowSelected] = useState("")
    const [selectedManager, setselectedManager] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5000/leavemanagementapi/alluser")
            .then((result) => {
                console.log("DATA", result.data);
                setallManagers(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])



    return (
        <div className='Manager' style={{ marginTop: '80px' }}>
            <Container>
                <Row>
                    {
                        allManagers.map((managers) => {
                            return (
                                <Col sm={12} md={9} lg={3}>
                                    <Card className='Manager-card'>
                                        <Card.Img className='Managercard-img' src={`http://localhost:5000${managers.UserImage}`}/>
                                        <Card.Body>
                                            <p>Manager Name: {managers.UserName}</p>
                                            {/* <p>Manager Email: {managers.UserEmail}</p>
                                            <p>Manager Password: {managers.UserPassword}</p>
                                            <p>Manager MobileNo: {managers.UserMobileNo}</p>
                                            <p>Manager Salary: {managers.UserSalary}</p>
                                            <p>Manager DateOfBirth: {managers.UserDateOfBirth}</p> */}
                                            <p>Manager Designation: {managers.UserDesignation}</p>
                                            {/* <p>Manager Department: {managers.UserDepartment}</p>
                                            <p>Manager JoiningDate: {managers.UserJoiningDate}</p>
                                            <p>Manager ReleavingDate: {managers.UserReleavingDaate}</p> */}
                                        </Card.Body>
                                        {/* <Card.Footer>
                                            <Button onClick={() => {
                                                setselectedEmp(emp)
                                                setshowUpdate(true)
                                            }}>Update</Button>
                                        </Card.Footer> */}
                                        <button className='Managerdetails-btn' onClick={() => {
                                            setselectedManager(managers)
                                            setshowSelected(true)
                                        }}>Show Details</button>

                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            <Modal show={showSelected} onHide={() => setshowSelected(false)}>
                <Modal.Header closeButton>Manager Details</Modal.Header>
                <Modal.Body>
                    <p> Manager Email: {selectedManager.UserEmail}</p>
                    <p> Manager Password: {selectedManager.UserPassword}</p>
                    <p> Manager Mobile No: {selectedManager.UserMobileNo}</p>
                    <p> Manager Salary: {selectedManager.UserSalary}</p>
                    <p> Manager Date Of Birth: {selectedManager.UserDateOfBirth}</p>
                    <p> Manager Gender: {selectedManager.UserGender}</p>
                    <p> Manager Department: {selectedManager.UserDepartment}</p>
                    <p> Manager Joining Date: {selectedManager.UserJoiningDate}</p>
                    <p> Manager Releaving Date: {selectedManager.UserReleavingDate}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default ManagerEmployees