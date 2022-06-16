import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { useState } from 'react';
import ResetButton from './ResetButton';
import { Link } from 'react-router-dom';
import firebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const NavigationBar = (props) => {
  const { resetData, career, changeTheme, theme, user } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <StyledNavBar expand={'sm'} variant={theme} collapseOnSelect>
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>
            <img
              alt=""
              src="../assets/img/logo.png"
              width="50"
              height="39"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
            <StyledOffcanvasHeader closeButton fill={' '}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                Menú
              </Offcanvas.Title>
            </StyledOffcanvasHeader>
            <StyledOffcanvasBody>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to={'/'} disabled={!career} href="#">
                  Tecnicatura
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/licenciatura'}
                  disabled={!career}
                  href="#"
                >
                  Licenciatura
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/estadisticas'}
                  disabled={!career}
                  href="#"
                >
                  Estadísticas
                </Nav.Link>
                <StyledNavDropdown
                  title="Opciones"
                  id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                >
                  {user && (
                    <NavDropdown.Item
                      as={Link}
                      to={'/'}
                      href="#"
                      onClick={() => signOut(auth)}
                    >
                      Cerrar sesión
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item onClick={changeTheme} href="#">
                    {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => setModalShow(true)}
                    disabled={!career}
                    href="#"
                  >
                    Borrar Datos
                  </NavDropdown.Item>
                </StyledNavDropdown>
              </Nav>
            </StyledOffcanvasBody>
          </Navbar.Offcanvas>
        </Container>
      </StyledNavBar>
      <ResetButtonContainer>
        <ResetButton
          show={modalShow}
          onHide={() => setModalShow(false)}
          resetData={resetData}
        />
      </ResetButtonContainer>
    </>
  );
};

export default NavigationBar;

const StyledNavBar = styled(Navbar)`
  .navbar-toggler {
    border: none;
  }
`;

const ResetButtonContainer = styled(Container)`
  position: absolute;
  top: 90%;
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    background: ${(props) => props.theme.background};
    .dropdown-item {
      color: ${(props) => props.theme.text};
      &:hover {
        background: transparent;
        opacity: 0.5;
      }
    }
    .disabled {
      color: #adb5bd;
    }
  }
`;

const StyledOffcanvasHeader = styled(Offcanvas.Header)`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  .btn-close {
    ${(props) =>
      props.theme.text !== 'black' &&
      `background: transparent
        url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
        center/1.2em auto no-repeat;`}
  }
`;

const StyledOffcanvasBody = styled(Offcanvas.Body)`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  a {
    color: ${(props) => props.theme.text};
  }
  .navbar-nav {
    width: 50%;
    margin: auto;
  }
  .nav-item {
    .dropdown-menu {
      border: 1px solid ${(props) => props.theme.border};
      text-align: center;
      hr {
        color: ${(props) => props.theme.text};
      }
    }
  }
`;
