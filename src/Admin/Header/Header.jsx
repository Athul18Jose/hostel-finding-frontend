import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

    const handleLogout = async()=>{
        await sessionStorage.clear()
      }
  return (
    <>
     <Navbar expand="lg" style={{backgroundColor:"#781985"}}>
      <Container>
        <Navbar.Brand className='text-light fw-bold'>BedSeeker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-3">
            <Link to={'/admin/home'}>
            <p className='text-light ms-3'>Home</p>
            </Link>
            <Link to={'/admin/manage-hostel'}>
            <p className='text-light mx-3'>Manage Hostel</p>
            </Link>
            <Link to={'/admin/manage-user'}>
            <p className='text-light'>Manage Users</p>
            </Link>
            <Link to={'/admin/manage-feedbacks'}>
            <p className='text-light ms-3'>Manage Feedbacks</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <a href="/login">
        <button onClick={handleLogout} style={{backgroundColor:"red",color:'white'}} className='btn'>Logout</button>
        </a>
      </Container>
    </Navbar>
    </>
  )
}

export default Header