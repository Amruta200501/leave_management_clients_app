import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../Allcss/HRLeaves.css"
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const HRLeaves = () => {
  const navigator = useNavigate()

  const [allLeave, setallLeave] = useState([])
  const [selectedLeave, setselectedLeave] = useState("")
  const [showSelected, setshowSelected] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/leavemanagementapi/allleave")
      .then((result) => {
        console.log("DATA", result.data)
        setallLeave(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])


  return (

    <div className='HRLeaves' style={{ marginTop: '80px' }}>
      <button className='applyleaveNavigate-btn' onClick={() => navigator('/applyleave')}><IoArrowRedoCircleOutline size={30 } className='svg'/> Apply Leave</button>
      <Container>
        <Row>
          {
            allLeave.map((leave) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='HRLeaves-card'>
                    <Card.Body>
                      <p>Leave Title:- {leave.LeaveTitle}</p>
                      <p>Leave Reason:- {leave.LeaveReason}</p>
                      <p>Leave Type:- {leave.LeaveType}</p>
                      {/* <p>{leave.LeaveStartDate}</p>
                      <p>{leave.LeaveEndDate}</p> */}
                      <p>Leave Applied Date:- {leave.LeaveAppliedDate}</p>
                      {/* <p>{leave.LeaveStatus}</p>
                      <p>{leave.LeavePeriod}</p>
                      <p>{leave.AdminResponse}</p> */}
                    </Card.Body>
                    {/* <Card.Footer> */}
                    <button className='Details-button' onClick={() => {
                      setselectedLeave(leave)
                      setshowSelected(true)
                    }}>Show Details</button>
                    {/* </Card.Footer> */}
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container >

      


      <Modal show={showSelected} onHide={() => setshowSelected(false)}>
        <Modal.Header closeButton>Leave Details</Modal.Header>
        <Modal.Body  className='HRLeaves-Modal'>
          <p> Leave Start Date: {selectedLeave.LeaveStartDate}</p>
          <p> Leave End Date: {selectedLeave.LeaveEndDate}</p>
          <p> Leave Status: {selectedLeave.LeaveStatus}</p>
          <p> Leave Period: {selectedLeave.LeavePeriod}</p>
          <p> Admin Response: {selectedLeave.AdminResponse}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
        </Modal.Footer>
      </Modal>

    </div >
  )
}

export default HRLeaves