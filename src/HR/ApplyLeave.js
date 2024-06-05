import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import '../Allcss/ApplyLeave.css'
import { useSelector } from 'react-redux'

const ApplyLeave = () => {

    const { UserData } = useSelector((state) => state.user)

    const [leaveTitle, setleaveTitle] = useState("")
    const [leaveReason, setleaveReason] = useState("")
    const [leaveType, setleaveType] = useState("")
    const [leaveStartDate, setleaveStartDate] = useState("")
    const [leaveEndDate, setleaveEndDate] = useState("")
    const [leaveAppliedDate, setleaveAppliedDate] = useState("")
    const [leavePeriod, setleavePeriod] = useState("")

    const applyleave = async () => {
        const applyData = {
            EmpId: UserData._id,
            LeaveTitle: leaveTitle,
            LeaveReason: leaveReason,
            LeaveType: leaveType,
            LeaveStartDate: leaveStartDate,
            LeaveEndDate: leaveEndDate,
            LeaveAppliedDate: leaveAppliedDate,
            LeavePeriod: Number(leavePeriod)
        }
        try {
            const applyResult = await axios.post("http://localhost:5000/leavemanagementapi/addleave", applyData)
            console.log("data", applyResult.data)
            alert("Leave Apply Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='applyleave-Container' style={{ marginTop: '80px' }}>
            <div className='applyleave-Form'>
                <Form>
                    <h2>Leave Form</h2>
                    <Row>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Title:-</label>
                            </div>
                            <div >
                                <input
                                    className='applyform-input'
                                    type='text'
                                    placeholder='Enter Leave Title'
                                    onChange={(e) => setleaveTitle(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Reason:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyform-input'
                                    type='text'
                                    placeholder='Enter Leave Reason'
                                    onChange={(e) => setleaveReason(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Type:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyform-input'
                                    type='text'
                                    placeholder='Enter Leave Type'
                                    onChange={(e) => setleaveType(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Start Date:-</label>
                            </div>
                            <div className='applyleave-divss'>
                                <input
                                    className='applyform-input'
                                    type='date'
                                    placeholder='Enter Leave Start Date'
                                    onChange={(e) => setleaveStartDate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave End Date:-</label>
                            </div>
                            <div >
                                <input
                                    className='applyform-input'
                                    type='date'
                                    placeholder='Enter Leave End Date'
                                    onChange={(e) => setleaveEndDate(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Applied Date:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyform-input'
                                    type='date'
                                    placeholder='Enter Leave Applied Date'
                                    onChange={(e) => setleaveAppliedDate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='applyleave-divs'>
                                <label>Leave Period:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyform-input'
                                    type='number'
                                    placeholder='Enter Leave Period'
                                    onChange={(e) => setleavePeriod(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <button className='sub-button' onClick={() => applyleave()}>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default ApplyLeave