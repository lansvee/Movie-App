// src/Components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // for redirects
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './NavigationBar.css'; // for custom hamburger styling

function MainNavbar() {
  const token = localStorage.getItem('token'); // Retrieve the token
  const notyf = new Notyf();
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    // Remove token
    localStorage.removeItem('token');

    // Show Notyf notification
    notyf.success('You have logged out successfully!');

    // Small delay so user sees notification
    setTimeout(() => {
      // Redirect to homepage (or any page)
      navigate('/');
    }, 1000);
  };

  return (
    <Navbar
      bg="white"
      expand="md"
      className="py-3 border-bottom border-danger"
      collapseOnSelect
    >
      <Container className="position-relative">
        
        {/* Hamburger Toggle on mobile */}
        <Navbar.Toggle
          aria-controls="peach-nav"
          className="border-0 me-3"
          style={{ zIndex: 9999 }}
        />

        {/* Brand Logo in the center */}
        <Navbar.Brand
          href="/"
          className="m-0 mx-auto"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.8rem',
            color: '#eb1c24',
            fontWeight: '700',
          }}
        >
          CINEMA & CO
        </Navbar.Brand>

        {/* Right: Example cart icon or any other icon you want */}
        <div className="cart-icon position-absolute end-0 d-flex align-items-center">
          <a href="/cart" className="text-danger fw-bold me-2">
            <i className="fa fa-shopping-bag" style={{ fontSize: '1.4rem' }}></i>
          </a>
        </div>

        <Navbar.Collapse id="peach-nav" className="mt-3 mt-md-0">
          <Nav className="ms-auto">
            {/* If user is NOT logged in => Register, Login */}
            {!token && (
              <>
                <Nav.Link href="/Register" className="mx-2 text-danger fw-bold">
                  REGISTER
                </Nav.Link>
                <Nav.Link href="/Login" className="mx-2 text-danger fw-bold">
                  LOGIN
                </Nav.Link>
              </>
            )}

            {/* If user IS logged in => Movies, Add Movie, Logout */}
            {token && (
              <>
                <Nav.Link href="/Movies" className="mx-2 text-danger fw-bold">
                  MOVIES
                </Nav.Link>
                <Nav.Link href="/AddMovie" className="mx-2 text-danger fw-bold">
                  ADD MOVIE
                </Nav.Link>
                <Nav.Link
                  onClick={handleLogout}
                  className="mx-2 text-danger fw-bold"
                  style={{ cursor: 'pointer' }}
                >
                  LOGOUT
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
