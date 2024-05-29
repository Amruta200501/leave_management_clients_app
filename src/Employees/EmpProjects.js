import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../Allcss/EmpProject.css'


const EmpProjects = () => {

    const [allEmpProjects, setallEmpProjects] = useState([])

    const { UserData } = useSelector((state) => state.user)
    // const dispatcher = useDispatch()

    const empprojectsData = {
        EmpId: UserData._id
    }

    useEffect(() => {
        axios.post("http://localhost:5000/leavemanagementapi/userbyempid", empprojectsData)
            .then((result) => {
                console.log("DATA", result.data);
                setallEmpProjects(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, []) 


    return (
        <div className='EmpProjects' style={{ marginTop: '80px' }}>
            <Container>
                <Row>
                    {
                        allEmpProjects.map((empprojects) => {
                            return (
                                <Col sm={12} md={9} lg={3}>
                                    <Card className='EmpProjects-card'>
                                        <Card.Body>
                                            <p> Project Title:-  {empprojects.ProjectTitle}</p>
                                            <p> Project Description:-  {empprojects.ProjectDescription}</p>
                                            <p> Project Status:-  {empprojects.ProjectStatus}</p>
                                            <p> Project Start Date:-  {empprojects.ProjectStartDate}</p>
                                            <p> Project End Date:-  {empprojects.ProjectEndDate}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default EmpProjects