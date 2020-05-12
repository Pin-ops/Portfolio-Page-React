import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <div className="bg-dark" style={NavbarStyle}>
            <Navbar bg="dark" expand="lg" className="container" variant="dark">
                <Navbar.Brand href="/">MY_PROFILO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="link">Home</Nav.Link>
                        <Nav.Link href="/portfolio " className="link">Portfolio</Nav.Link>
                        <Nav.Link href="/services" className="link">Services</Nav.Link>
                        <Nav.Link href="/testimonial" className="link">Testimonial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const NavbarStyle = {
    position:'sticky',
    top:'0',
    zIndex:'1000'
}
export default Header
