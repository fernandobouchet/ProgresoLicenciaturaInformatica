import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import firebaseApp from '../credentials';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [registered, setRegistered] = useState(false);

  async function handlerSubmit(e) {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    if (registered) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <StyledLoginContainer>
      <StyledTitleContainer>
        <img
          alt=""
          src="../assets/img/logo.png"
          width="70"
          height="auto"
          className="d-inline-block align-top"
        />
        <h1>Progreso de Licenciatura Informática</h1>
      </StyledTitleContainer>
      <StyledForm onSubmit={(e) => handlerSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            required
            minLength={6}
          />
        </Form.Group>

        <StyledSubmitButton variant="primary" type="submit">
          {!registered ? 'Iniciar sesión' : 'Registrarme'}
        </StyledSubmitButton>
        <p>
          {registered ? '¿Tenes cuenta? ' : '¿No tenes cuenta? '}
          <StyledButtonA
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              registered ? setRegistered(false) : setRegistered(true);
            }}
            variant="secondary"
          >
            {registered ? 'Inicia sesión!' : 'Registrate!'}
          </StyledButtonA>
        </p>
      </StyledForm>
      <DivC>
        <StyledSpan>Ó</StyledSpan>
      </DivC>
      <StyledStackContainer>
        <GoogleButton
          type="submit"
          variant="light"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          <FcGoogle style={{ margin: '0 0.5rem' }} />
          Acceder con Google
        </GoogleButton>
      </StyledStackContainer>
    </StyledLoginContainer>
  );
};

export default Login;

const StyledLoginContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledForm = styled(Form)`
  width: 17rem;
`;

const StyledStackContainer = styled(Container)`
  width: 17rem;
  padding: 0;
`;

const StyledSubmitButton = styled(Button)`
  width: 17rem;
  margin: 1rem auto;
`;

const StyledTitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1rem 0;
`;

const StyledButtonA = styled(Button)`
  background-color: inherit;
  border: none;
  color: #0d6efd;
  text-decoration: underline;
  box-shadow: none !important;
  padding: 0;

  &:hover {
    background-color: inherit;
    border: none;
    color: ${(props) => props.theme.text};
  }
  &:focus {
    background-color: inherit;
    border: none;
    color: #0d6efd;
  }
  &::selection {
    background-color: inherit;
    border: none;
    color: #0d6efd;
  }
`;

const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17rem;
  border-color: ${(props) => props.theme.border};
  margin-top: 1rem;

  &:hover {
    border-color: ${(props) => props.theme.border};
    background-color: #ced4da;
  }
`;

const DivC = styled.div`
  width: 17rem;
  display: flex;
  flex-direction: row;
  border: none;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding: 24px 0 0;
  padding: var(--spacing-3) 0 0 0;
  &::before {
    content: '';
    border-bottom: 1px solid #c2c8d0;
    flex: 1 0 auto;
    height: 50%;
    margin: 0;
  }
  &::after {
    content: '';
    border-bottom: 1px solid #c2c8d0;
    flex: 1 0 auto;
    height: 50%;
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  flex: 0.2 0 auto;
  margin: 0;
`;
