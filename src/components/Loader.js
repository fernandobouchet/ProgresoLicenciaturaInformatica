import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const Loader = () => {
  return (
    <>
      <SpinnerContainer fluid>
        <StyledSpinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </StyledSpinner>
      </SpinnerContainer>
    </>
  );
};

export default Loader;

const SpinnerContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled(Spinner)`
  width: 9rem;
  height: 9rem;
`;
