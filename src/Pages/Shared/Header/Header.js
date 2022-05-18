import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container className='fs-4 fw-semibold text-white'>
                    <Navbar.Brand as={Link} to="/">
                        <img height={60} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About Us</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="additems">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?

                                    <button className='btn btn-link text-white text-decoration-none bg-danger fs-4' onClick={handleSignOut}>Sign Out</button>

                                    :
                                    <>
                                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;