import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const DividerLine = () => {
  return <Divider></Divider>;
};

export default DividerLine;

const Divider = styled(Container)`
  border-top: 0.1rem solid ${(props) => props.theme.border};
  margin: 1rem auto;
`;
