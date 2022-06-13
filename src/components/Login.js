import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
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
    <Container>
      <h1>{!registered ? 'Inicia Sesión' : 'Registrate'}</h1>
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="dark" type="submit">
          {!registered ? 'Inicia sesión!' : 'Registrate!'}
        </Button>
      </Form>

      <Container>
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
      </Container>
    </Container>
  );
};

export default Login;
