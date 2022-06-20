import { Container, ProgressBar } from 'react-bootstrap';
import { getPercentageOfCourses } from '../Utils/Functions';
import styled from 'styled-components';

const CoursesProgressBar = (props) => {
  const { data } = props;
  const approved = getPercentageOfCourses(data, 'Aprobada');
  const inProgress = getPercentageOfCourses(data, 'Cursando');
  const pending = getPercentageOfCourses(data, 'Pendiente');
  const regular = getPercentageOfCourses(data, 'Regularizada');

  return (
    <StatisticContainer>
      <ProgressBar>
        <ProgressBar variant="success" now={approved} label={`${approved}%`} />
        <ProgressBar variant="warning" now={regular} label={`${regular}%`} />
        <ProgressBar
          variant="primary"
          now={inProgress}
          label={`${inProgress}%`}
        />
        <ProgressBar variant="secondary" now={pending} label={`${pending}%`} />
      </ProgressBar>
    </StatisticContainer>
  );
};

export default CoursesProgressBar;

const StatisticContainer = styled(Container)`
  padding: 0.5rem 0;
  max-width: 800px;
`;
