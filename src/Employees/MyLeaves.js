import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../Allcss/MyLeaves.css'
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const MyLeaves = () => {

  const navigator = useNavigate()

  const [allEmpLeaves, setallEmpLeaves] = useState([])
  const [selectedEmpleave, setselectedEmpleave] = useState("")
  const [showSelected, setshowSelected] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/leavemanagementapi/allleave")
      .then((result) => {
        console.log("DATA", result.data);
        setallEmpLeaves(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className='EmpLeaves' style={{ marginTop: '80px' }}>
      <button className='EmpleavesNavigator-btn' onClick={() => navigator('/addempleaves')}>Apply Leaves <IoArrowRedoCircleOutline size={30}/></button>
      <Container>
        <Row>
          {
            allEmpLeaves.map((empleave) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='EmpLeaves-card'>
                    <Card.Body>
                      <p> Leave Title:- {empleave.LeaveTitle}</p>
                      <p> Leave Reason:- {empleave.LeaveReason}</p>
                      <p> Leave Type:- {empleave.LeaveType}</p>
                      {/* <p>{leave.LeaveStartDate}</p>
                      <p>{leave.LeaveEndDate}</p> */}
                      <p> Leave Applied Date:- {empleave.LeaveAppliedDate}</p>
                      {/* <p>{leave.LeaveStatus}</p>
                      <p>{leave.LeavePeriod}</p>
                      <p>{leave.AdminResponse}</p> */}
                    </Card.Body>
                    {/* <Card.Footer> */}
                      <button className='empleaveDetails-btn' onClick={() => {
                        setselectedEmpleave(empleave)
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
          <p> Leave Start Date: {selectedEmpleave.LeaveStartDate}</p>
          <p> Leave End Date: {selectedEmpleave.LeaveEndDate}</p>
          <p> Leave  Status: {selectedEmpleave.LeaveStatus}</p>
          <p> Leave Period: {selectedEmpleave.LeavePeriod}</p>
          <p> Admin Response: {selectedEmpleave.AdminResponse}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default MyLeaves