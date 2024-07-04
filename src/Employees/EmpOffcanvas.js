import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
// import '../Allcss/EmpOffcanva.css'
import EMPProfile from '../img/icons8-profile-50.png'
import EmpLeave from '../img/icons8-leave-50.png'
import EmpProject from '../img/icons8-projects-50.png'
import Bars from '../img/icons8-bars-64.png'

const EmpOffcanvas = () => {

    const [isShow, setisShow] = useState(false)

    const handleShow = () => { setisShow(true) }
    const handlehide = () => { setisShow(false) }

    return (
        <>
            <Navbar expand='lg' fixed='top' sticky='top' className='Navbar'>
                <Container>
                    <Navbar.Brand className='Nav-brand'>
                    <img src={Bars} onClick={() => handleShow()} /><div style={{ color: 'white', marginTop:'15px' }}> Employee Section </div>
                        </Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={isShow} onHide={handlehide} className='HRoffcanva'>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/emp/empprofile' className='nav-link'><img src={EMPProfile} className='img-icon' />  Employee Profile</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/emp/myleaves' className='nav-link'><img src={EmpLeave} className='img-icon' />  My Leaves</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/emp/empprojects' className='nav-link'><img src={EmpProject} className='img-icon' />  Employee Projects</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default EmpOffcanvas