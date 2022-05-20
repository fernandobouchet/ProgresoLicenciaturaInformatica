import { DropdownButton, Dropdown } from 'react-bootstrap';

const Buttons = (props) => {
  const { state, changeCourseState, month, course } = props;

  function handleClick(e) {
    e.preventDefault();
    changeCourseState(month, course, e.target.value);
  }

  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        title={state}
        variant={
          state === 'En curso'
            ? 'primary'
            : state === 'Aprobada'
            ? 'success'
            : 'secondary'
        }
      >
        <Dropdown.Item
          as="button"
          value={'Pendiente'}
          onClick={(e) => handleClick(e)}
        >
          Pendiente
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={'En curso'}
          onClick={(e) => handleClick(e)}
        >
          En curso
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={'Aprobada'}
          onClick={(e) => handleClick(e)}
        >
          Aprobada
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default Buttons;
