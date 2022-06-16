import { Container, Form, Button, Stack } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
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
        <h1>Bienvenido! </h1>
        <h2>{!registered ? 'Inicia Sesión' : 'Registrate'}</h2>
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
      </StyledForm>

      <StyledStackContainer>
        <Stack gap={4}>
          <Button
            type="submit"
            onClick={() => setRegistered(!registered)}
            variant="secondary"
          >
            {registered
              ? '¿Tienes cuenta? Inicia sesión!'
              : '¿No tienes cuenta? Registrate!'}
          </Button>

          <Button
            type="submit"
            variant="primary"
            onClick={() => signInWithRedirect(auth, googleProvider)}
          >
            Acceder con Google
          </Button>
        </Stack>
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
  margin: 1rem;
`;
