import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Allcss/ManagerProjects.css'


const ManagersProject = () => {

    const [allmanagerProjects, setallmanagerProjects] = useState([])

    const { UserData } = useSelector((state) => state.user)

    const managerprojectsData = {
        ManagerId: UserData._id
    }

    useEffect(() => {
        axios.post("http://localhost:5000/leavemanagementapi/userbyempid",managerprojectsData)
        .then((result) => {
            console.log("DATA",result.data);
            setallmanagerProjects(result.data)
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    

    return (
        <div className='ManagerProject' style={{ marginTop: '80px' }}>
            <Container>
                <Row>
                    {
                        allmanagerProjects.map((managerprojects) => {
                            return (
                                <Col sm={12} md={9} lg={3} >
                                    <Card className='ManagerProject-card'>
                                        <Card.Body>
                                            <p>Project Title:- {managerprojects.ProjectTitle}</p>
                                            <p>Project Description:- {managerprojects.ProjectDescription}</p>
                                            <p>Project Status:- {managerprojects.ProjectStatus}</p>
                                            <p>Project Start Date:- {managerprojects.ProjectStartDate}</p>
                                            <p>Project End Date:- {managerprojects.ProjectEndDate}</p>
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

export default ManagersProject