import { Container, Button, Stack } from 'react-bootstrap';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import WarningModal from './WarningModal';
import firebaseApp from '../credentials';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = (props) => {
  const { setUser } = props;

  const [showInvitedWarning, setShowInvitedWarning] = useState(false);

  return (
    <>
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
        <StyledStackContainer gap={4}>
          <GoogleButton
            type="submit"
            variant="light"
            onClick={() => signInWithRedirect(auth, googleProvider)}
          >
            <FcGoogle style={{ margin: '0 0.5rem' }} />
            Acceder con Google
          </GoogleButton>
          <DivC>
            <StyledSpan>Ó</StyledSpan>
          </DivC>
          <Button onClick={() => setShowInvitedWarning(true)}>
            Acceder como invitado
          </Button>
        </StyledStackContainer>
      </StyledLoginContainer>
      <WarningModal
        showInvitedWarning={showInvitedWarning}
        setShowInvitedWarning={setShowInvitedWarning}
        setUser={setUser}
      />
    </>
  );
};

export default Login;

const StyledLoginContainer = styled(Container)`
  height: 100vh;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledStackContainer = styled(Stack)`
  width: 17rem;
  padding: 0;
  margin: 0 auto;
  flex: none;
`;

const StyledTitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1rem 0;
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
