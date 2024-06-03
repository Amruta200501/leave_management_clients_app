import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import '../Allcss/AddEmployees.css'
import axios from 'axios'



const AddEmployees = () => {
    const [userName, setuserName] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userMobileno, setuserMobileno] = useState("")
    const [userSalary, setuserSalary] = useState(0)
    const [userImage, setuserImage] = useState("")
    const [userDOB, setuserDOB] = useState(0)
    const [userGender, setuserGender] = useState("")
    const [userDesignation, setuserDesignation] = useState("")
    const [userDepartment, setuserDepartment] = useState("")
    const [userJoiningdate, setuserJoiningdate] = useState(0)
    const [userReleavingdate, setuserReleavingdate] = useState(0)

    const addemployees = async () => {
        const addData = {
            UserName: userName,
            UserEmail: userEmail,
            UserPassword: userPassword,
            UserMobileNo: Number(userMobileno),
            UserSalary: userSalary,
            UserImage: userImage,
            UserDateOfBirth: userDOB,
            UserGender: userGender,
            UserDesignation: userDesignation,
            UserDepartment: userDepartment,
            UserJoiningDate: userJoiningdate,
            UserReleavingDate: userReleavingdate
        }
        try {
            const result = await axios.post("http://localhost:5000/leavemanagementapi/adduser", addData)
            console.log("data", result.data)
            alert("Employee Added")
        } catch (error) {
            console.log(error)
        }
    }

    async function uploadImage(e) {
        const Empimg = new FormData();
        Empimg.append("image", e.target.files[0])
        axios.post("http://localhost:5000/Uploadfile", Empimg)
            .then((res) => {
                console.log("Response", res.data);
                setuserImage(res.data.filepath)
            }).catch((err)=> {
                console.log("Error",err);
             });
    }

return (
    <div className='addemployees-Container' style={{ marginTop: '80px' }}>
        <div className='addemployee-Form'>
            <Form>
                <h2>Add Employee Form</h2>
                <Row>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Name :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='text'
                                placeholder='Enter Employee Name'
                                onChange={(e) => setuserName(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Email :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='Email'
                                placeholder='Enter Employee Email'
                                onChange={(e) => setuserEmail(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Password :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='password'
                                placeholder='Enter Employee Password'
                                onChange={(e) => setuserPassword(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Mobile No :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='number'
                                placeholder='Enter Employee Mobile No'
                                onChange={(e) => setuserMobileno(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Salary :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='text'
                                placeholder='Enter Employee Salary'
                                onChange={(e) => setuserSalary(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Date Of Birth :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='date'
                                placeholder='Enter Employee Date Of Birth'
                                onChange={(e) => setuserDOB(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Gender :-</label>
                        </div>
                        <div>
                            <Form.Check type='radio' onChange={(e) => setuserGender(e.target.value)} value='Male' label='Male' name='status' inline></Form.Check>
                            <Form.Check type='radio' onChange={(e) => setuserGender(e.target.value)} value='Female' label='Female' name='status' inline></Form.Check>
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Designation :-</label>
                        </div>
                        <div>
                            <Form.Select onChange={(e) => setuserDesignation(e.target.value)}>
                                <option value="HR">HR</option>
                                <option value="Manager">Manager</option>
                                <option value="Employee">Employee</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Department :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='text'
                                placeholder='Enter Employee Department'
                                onChange={(e) => setuserDepartment(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Joining Date :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='date'
                                placeholder='Enter Employee Joining Date'
                                onChange={(e) => setuserJoiningdate(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Releaving Date :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='date'
                                placeholder='Enter Employee Releaving Date'
                                onChange={(e) => setuserReleavingdate(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col>
                        <div className='addemployee-div'>
                            <label>Employee Profile Photo :-</label>
                        </div>
                        <div>
                            <input
                                className='addemployee-input'
                                type='file'
                                placeholder='Upload Image'
                                onChange={uploadImage}
                            />
                        </div>
                    </Col>

                </Row>

                <button className='Empsubmit-btn' onClick={() => addemployees()}>Submit</button>
            </Form>
        </div>
    </div>
)
}

export default AddEmployees