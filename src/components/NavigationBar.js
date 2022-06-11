import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { useState } from 'react';
import ResetButton from './ResetButton';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  const { resetData, career, changeTheme, theme } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar expand={'sm'} variant={theme} collapseOnSelect>
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>
            Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to={'/'} disabled={!career}>
                  Tecnicatura
                </Nav.Link>
                <Nav.Link as={Link} to={'/licenciatura'} disabled={!career}>
                  Licenciatura
                </Nav.Link>
                <StyledNavDropdown
                  title="Opciones"
                  id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                >
                  <NavDropdown.Item href="#action3">
                    Iniciar sesión
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={changeTheme}>
                    {theme === 'light' ? 'Modo oscuro' : 'Modo Claro'}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => setModalShow(true)}
                    disabled={!career}
                  >
                    Borrar Datos
                  </NavDropdown.Item>
                </StyledNavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
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

const ResetButtonContainer = styled(Container)`
  position: absolute;
  top: 90%;
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    background: ${(props) => props.theme.background};
    a {
      color: ${(props) => props.theme.text};
      &:hover {
        background: transparent;
        opacity: 0.5;
      }
    }
  }
`;
