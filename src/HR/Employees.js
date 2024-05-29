import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Allcss/Employees.css'
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const Employees = () => {
    const navigator = useNavigate()

    const [allEmployees, setallEmployees] = useState([])
    const [selectedEmp, setselectedEmp] = useState("")
    const [showUpdate, setshowUpdate] = useState("")
    const [salary, setsalary] = useState(0)
    const [showSelected, setshowSelected] = useState("")



    useEffect(() => {
        axios.get("http://localhost:5000/leavemanagementapi/alluser")
            .then((result) => {
                console.log("DATA", result.data)
                setallEmployees(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])

    const updateSalary = async () => {
        const updateData = {
            userid: selectedEmp._id,
            UserSalary: Number(salary)
        }
        try {
            const updateResult = await axios.put("http://localhost:5000/leavemanagementapi/updateuser", updateData)
            console.log(updateResult)
            setshowUpdate(false)
            alert("Salary Update")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='Employees' style={{ marginTop: '80px' }}>
            <button className='addempNavigate-btn' onClick={() => navigator("/addemployees")}>ADD EMPLOYEES <IoArrowRedoCircleOutline size={30}/></button>

            <Container>
                <Row>
                    {
                        allEmployees.map((emp) => {
                            return (
                                <Col sm={12} md={9} lg={3}>
                                    <Card className='Employees-card'>
                                        <Card.Img className='Empcard-img' src={`http://localhost:5000${emp.UserImage}`} />
                                        <Card.Body>
                                            <p>Employee Name: {emp.UserName}</p>
                                            {/* <p>Employee Email: {emp.UserEmail}</p>
                                            <p>Employee Password: {emp.UserPassword}</p>
                                            <p>Employee MobileNo: {emp.UserMobileNo}</p>
                                            <p>Employee Salary: {emp.UserSalary}</p>
                                            <p>Employee DateOfBirth: {emp.UserDateOfBirth}</p> */}
                                            <p>Employee Designation: {emp.UserDesignation}</p>
                                            {/* <p>Employee Department: {emp.UserDepartment}</p>
                                            <p>Employee JoiningDate: {emp.UserJoiningDate}</p>
                                            <p>Employee ReleavingDate: {emp.UserReleavingDaate}</p> */}
                                        </Card.Body>
                                        <div className='btn-div'>
                                            <button className='Update-btn' onClick={() => {
                                                setselectedEmp(emp)
                                                setshowUpdate(true)
                                            }}>Update</button>

                                            <button className='EmpDetails-btn' onClick={() => {
                                                setselectedEmp(emp)
                                                setshowSelected(true)
                                            }}> Show Details</button>
                                        </div>

                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            

            <Modal show={showUpdate} onHide={() => setshowUpdate(false)}>
                <Modal.Header closeButton>Update Salary</Modal.Header>
                <Modal.Body>
                    <Form.Control onChange={(e) => setsalary(e.target.value)} type='number' placeholder='Enter the Salary'></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => updateSalary()}>YES</Button>
                    <Button variant='danger' onClick={() => setshowUpdate()}>NO</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSelected} onHide={() => setshowSelected(false)}>
                <Modal.Header closeButton>Employee Details</Modal.Header>
                <Modal.Body>
                    <p> Employee Email: {selectedEmp.UserEmail}</p>
                    <p> Employee Password: {selectedEmp.UserPassword}</p>
                    <p> Employee Mobile No: {selectedEmp.UserMobileNo}</p>
                    <p> Employee Salary: {selectedEmp.UserSalary}</p>
                    <p> Employee Date Of Birth: {selectedEmp.UserDateOfBirth}</p>
                    <p> Employee Gender: {selectedEmp.UserGender}</p>
                    <p> Employee Department: {selectedEmp.UserDepartment}</p>
                    <p> Employee Joining Date: {selectedEmp.UserJoiningDate}</p>
                    {/* <p> Employee Releaving Date: {selectedEmp.UserReleavingDate}</p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Employees
