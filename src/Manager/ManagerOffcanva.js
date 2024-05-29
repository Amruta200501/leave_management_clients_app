import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
// import '../Allcss/ManagerOffcanva.css'
import ManagerProfile from '../img/icons8-profile-50.png';
import ManagerLeave from '../img/icons8-leave-50.png';
import Managers from '../img/icons8-people-50.png'
import Project from '../img/icons8-projects-50.png'
import Bars from '../img/icons8-bars-64.png'


const ManagerOffcanva = () => {

    const [isShow, setisShow] = useState(false)

    const handleShow = () => { setisShow(true) }
    const handlehide = () => { setisShow(false) }


    return (
        <>
            <Navbar expand='lg' fixed='top' sticky='top' className='Navbar'>
                <Container>
                    <Navbar.Brand className='Nav-brand'>
                    <img src={Bars} onClick={() => handleShow()} /> <div style={{ color: 'white', marginTop:'15px' }}> Management Department </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={isShow} onHide={handlehide} className='HRoffcanva'>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/managerprofile' className='nav-link'><img src={ManagerProfile} className='img-icon'  />   Manager Profile</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/managerleaves' className='nav-link'><img src={ManagerLeave} className='img-icon'  />   Manager Leaves</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/manageremployees' className='nav-link'><img src={Managers} className='img-icon'  />   Managers</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/managersprojects' className='nav-link'><img src={Project}className='img-icon'  />   Manager Projects</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default ManagerOffcanva