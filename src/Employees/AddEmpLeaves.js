import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Allcss/AddEmpLeaves.css'



const AddEmpLeaves = () => {

    const { UserData } = useSelector((state) => state.user)

    const [leavetitle, setleavetitle] = useState("")
    const [leavereason, setleavereason] = useState("")
    const [leavetype, setleavetype] = useState("")
    const [leavestartdate, setleavestartdate] = useState("")
    const [leaveenddate, setleaveenddate] = useState("")
    const [leaveapplieddate, setleaveapplieddate] = useState("")
    const [leaveperiod, setleaveperiod] = useState(0)

    const AddLeave = async () => {
        const AddData = {
            EmpId: UserData._id,
            LeaveTitle: leavetitle,
            LeaveReason: leavereason,
            LeaveType: leavetype,
            LeaveStartDate: leavestartdate,
            LeaveEndDate: leaveenddate,
            LeaveAppliedDate: leaveapplieddate,
            LeavePeriod: leaveperiod
        }
        try {
            const result = await axios.post("http://localhost:5000/leavemanagementapi/addleave", AddData)
            console.log("data", result.data);
            alert("Leave Applied Sucessfully")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='applyEmpleave-Container' style={{ marginTop: '80px' }}>
            <div className='applyEmpleave-Form'>
                <Form>

                    <h2>Employees Leave Form</h2>
                    <Row>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Title:-</label>
                            </div>
                            <div >
                                <input
                                    className='applyEmpform-input'
                                    type='text'
                                    placeholder='Enter Leave Title'
                                    onChange={(e) => setleavetitle(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Reason:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='text'
                                    placeholder='Enter Leave Reason'
                                    onChange={(e) => setleavereason(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Type:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='text'
                                    placeholder='Enter Leave Type'
                                    onChange={(e) => setleavetype(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Start Date:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='date'
                                    placeholder='Enter Leave Start Date'
                                    onChange={(e) => setleavestartdate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave End Date:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='date'
                                    placeholder='Enter Leave End Date'
                                    onChange={(e) => setleaveenddate(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Applied Date:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='date'
                                    placeholder='Enter Leave Applied Date'
                                    onChange={(e) => setleaveapplieddate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='applyEmpleave-div'>
                                <label>Leave Period:-</label>
                            </div>
                            <div>
                                <input
                                    className='applyEmpform-input'
                                    type='number'
                                    placeholder='Enter Leave Period'
                                    onChange={(e) => setleaveperiod(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    
                    <button className='addEmpleave-button' onClick={() => AddLeave()}>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default AddEmpLeaves
