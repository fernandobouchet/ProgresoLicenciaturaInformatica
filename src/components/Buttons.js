import { DropdownButton, Dropdown } from 'react-bootstrap';

const Buttons = (props) => {
  const { state, setCurrent } = props;

  function handleClick(e) {
    e.preventDefault();
    setCurrent((prevState) => ({
      ...prevState,
      estado: e.target.value,
    }));
  }

  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        title={state}
        variant={
          state === 'Cursando'
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
