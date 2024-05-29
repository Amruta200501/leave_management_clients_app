import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Allcss/AddManagerLeaves.css'



const AddManagerLeaves = () => {

    const { UserData } = useSelector((state) => state.user)

    const [managerleavetitle, setmanagerleavetitle] = useState("")
    const [managerleavereason, setmanagerleavereason] = useState("")
    const [managerleavetype, setmanagerleavetype] = useState("")
    const [managerleavestartdate, setmanagerleavestartdate] = useState("")
    const [managerleaveenddate, setmanagerleaveenddate] = useState("")
    const [managerleaveapplieddate, setmanagerleaveapplieddate] = useState("")
    const [managerleaveperiod, setmanagerleaveperiod] = useState(0)

    const addManagerLeaves = async () => {
        const addleaveData = {
            EmpId: UserData._id,
            LeaveTitle: managerleavetitle,
            LeaveReason: managerleavereason,
            LeaveType: managerleavetype,
            LeaveStartDate: managerleavestartdate,
            LeaveEndDate: managerleaveenddate,
            LeaveAppliedDate: managerleaveapplieddate,
            LeavePeriod: Number(managerleaveperiod) 
        }
        try {
            const result = await axios.post("http://localhost:5000/leavemanagementapi/addleave", addleaveData)
            console.log("data", result.data);
            alert("Leave Applied Sucessfully")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='addmanagerleave-Container' style={{ marginTop: '80px' }}>
            <div className='addmanagerleave-Form'>
                <Form>
                    <h2>Manager Leave Form</h2>
                    <Row>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Title :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='text'
                                    placeholder='Enter Leave Title'
                                    onChange={(e) => setmanagerleavetitle(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Reason :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='text'
                                    placeholder='Enter Leave Reason'
                                    onChange={(e) => setmanagerleavereason(e.target.value)}
                                />
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Type :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='text'
                                    placeholder='Enter Leave Type'
                                    onChange={(e) => setmanagerleavetype(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Start Date :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='date'
                                    placeholder='Enter Leave Start Date'
                                    onChange={(e) => setmanagerleavestartdate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave End Date :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='date'
                                    placeholder='Enter Leave End Date'
                                    onChange={(e) => setmanagerleaveenddate(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Applied Date :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='date'
                                    placeholder='Enter Leave Applied Date'
                                    onChange={(e) => setmanagerleaveapplieddate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='addmanagerleave-div'>
                                <label>Leave Period :-</label>
                            </div>
                            <div>
                                <input
                                    className='addmanagerleaves-input'
                                    type='text'
                                    placeholder='Enter Leave Period'
                                    onChange={(e) => setmanagerleaveperiod(e.target.value)}
                                />
                            </div>
                        </Col>

                    </Row>
                    <button className='add-button'  onClick={() => addManagerLeaves()}>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default AddManagerLeaves