import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../Allcss/ManagerLeaves.css'
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const ManagerLeaves = () => {

    const navigator = useNavigate()

    const [allManagersLeave, setallManagersLeave] = useState([])
    const [selectedManagerLeave, setselectedManagerLeave] = useState("")
    const [showSelected, setshowSelected] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5000/leavemanagementapi/allleave")
            .then((result) => {
                console.log("DATA", result.data)
                setallManagersLeave(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])

    return (
        <div className='ManagerLeaves' style={{ marginTop: '80px' }}>
            <button className='ManagerLeavesNavigator-btn' onClick={() => navigator('/addmanagerleaves')}>Apply Manager Leaves < IoArrowRedoCircleOutline size={30} className='svg'/></button>
            <Container>
                <Row>
                    {
                        allManagersLeave.map((managerleave) => {
                            return (
                                <Col sm={12} md={9} lg={3}>
                                    <Card className='ManagerLeaves-card'>
                                        <Card.Body>
                                            <p>Leave Title:- {managerleave.LeaveTitle}</p>
                                            <p>Leave Reason:- {managerleave.LeaveReason}</p>
                                            <p>Leave Type:- {managerleave.LeaveType}</p>
                                            {/* <p>{leave.LeaveStartDate}</p>
                                            <p>{leave.LeaveEndDate}</p> */}
                                            <p>Leave Applied Date:- {managerleave.LeaveAppliedDate}</p>
                                            {/* <p>{leave.LeaveStatus}</p>
                                                <p>{leave.LeavePeriod}</p>
                                            <p>{leave.AdminResponse}</p> */}
                                        </Card.Body>
                                        {/* <Card.Footer> */}
                                            <button className='ManagerLeavesdetails-btn' onClick={() => {
                                                setselectedManagerLeave(managerleave)
                                                setshowSelected(true)
                                            }}>Show Details</button>
                                        {/* </Card.Footer> */}
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            

            <Modal show={showSelected} onHide={() => setshowSelected(false)}>
                <Modal.Header closeButton>Leave Details</Modal.Header>
                <Modal.Body>
                    <p> LeaveStartDate: {selectedManagerLeave.LeaveStartDate}</p>
                    <p> LeaveEndDate: {selectedManagerLeave.LeaveEndDate}</p>
                    <p> LeaveStatus: {selectedManagerLeave.LeaveStatus}</p>
                    <p> LeavePeriod: {selectedManagerLeave.LeavePeriod}</p>
                    <p> AdminResponse: {selectedManagerLeave.AdminResponse}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ManagerLeaves