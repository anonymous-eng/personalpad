import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >
            <Link to="/" style={{ textDecoration: 'none' }}> Personal Pad </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            {userInfo && (
              <Form className="d-flex">
                <FormControl
                  style={{ color: "black" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav
            style={{ maxHeight: '100px', marginRight:"50px" }}
            navbarScroll
          >
            {userInfo ? (
              <>
                <Nav.Link>
                  <Link to="/mynotes" style={{ textDecoration: 'none' }}> My Notes </Link>
                </Nav.Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item>
                    <Link to="/profile" style={{ textDecoration: 'none' }}> My Profile </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link>
                <Link to="/login" style={{ textDecoration: 'none' }}> Login </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
