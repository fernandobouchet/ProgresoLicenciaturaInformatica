import TabMain from './Tab';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Home from './Home';
import Statistics from './Statistics';
import DividerLine from './Divider';

const Main = (props) => {
  const { state, changeState, careerName, theme } = props;

  return (
    <>
      {state ? (
        <MainContainer>
          <TitleContainer>
            <StyledH1>{careerName}</StyledH1>
          </TitleContainer>
          <Statistics data={state} />
          <DividerLine />
          <TabMain
            Materias={state}
            changeState={changeState}
            theme={theme}
            careerName={careerName}
          />
        </MainContainer>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Main;

const StyledH1 = styled.h1`
  font-size: calc(1.3rem + 1vw);
`;

const TitleContainer = styled.div`
  max-width: 95%;
  margin: 1rem auto;
`;

const MainContainer = styled(Container)`
  @media (min-width: 1024px) {
    max-width: 900px;
  }
  @media (max-width: 728px) {
    max-width: 95%;
  }
`;
