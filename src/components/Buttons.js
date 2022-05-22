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
          state === 'Cursando'
            ? 'outline-primary'
            : state === 'Aprobada'
            ? 'outline-success'
            : 'outline-secondary'
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
          value={'Cursando'}
          onClick={(e) => handleClick(e)}
        >
          Cursando
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
