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
        <ProgressBar
          variant="success"
          now={approved}
          label={`${approved}%`}
          key={1}
        />
        <ProgressBar
          variant="warning"
          now={regular}
          label={`${regular}%`}
          key={2}
        />
        <ProgressBar
          variant="primary"
          now={inProgress}
          label={`${inProgress}%`}
          key={3}
        />
        <ProgressBar
          variant="secondary"
          now={pending}
          label={`${pending}%`}
          key={4}
        />
      </ProgressBar>
    </StatisticContainer>
  );
};

export default CoursesProgressBar;

const StatisticContainer = styled(Container)`
  padding: 0.5rem 0;
`;
