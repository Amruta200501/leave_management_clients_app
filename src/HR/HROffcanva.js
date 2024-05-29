import React, { useState } from 'react'
import { Container, Navbar, Offcanvas, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import '../Allcss/HROffcanva.css'
import HRProfile from '../img/icons8-profile-50.png'
import AddHoliday from '../img/icons8-add-properties-50.png';
import Employees from '../img/icons8-employee-50.png';
import Leave from '../img/icons8-leave-50.png'
import { AiOutlineBars } from "react-icons/ai";
import Bars from '../img/icons8-bars-64.png'

const HROffcanva = () => {
    const [isShow, setisShow] = useState(false)

    const handleShow = () => { setisShow(true) }
    const handlehide = () => { setisShow(false) }

    return (
        <>
            <Navbar expand='lg' fixed='top' sticky='top' className='Navbar'>
                <Container>
                    <Navbar.Brand className='Nav-brand'>
                        {/* <Button className='icon-button'> */}
                        <img src={Bars} onClick={() => handleShow()} /> <div style={{ color: 'white', marginTop: '15px' }}> Human Resources Department</div>
                        {/* </Button> */}
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={isShow} onHide={handlehide} className='HRoffcanva'>
                <Offcanvas.Header closeButton>
                    {/* Header */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/hrprofile' className='nav-link'><img src={HRProfile} className='img-icon' />  HR Profile</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/addholiday' className='nav-link'><img src={AddHoliday} className='img-icon' />  Add Holiday</Link>
                        </Nav.Link >
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/employees' className='nav-link'><img src={Employees} className='img-icon' />  Employees</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/hrleaves' className='nav-link'><img src={Leave} className='img-icon' />  HR Leaves</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default HROffcanva