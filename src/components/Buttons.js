import { DropdownButton, Dropdown } from 'react-bootstrap';

const Buttons = (props) => {
  const { state } = props;

  return (
    <>
      <DropdownButton id="dropdown-item-button" title={state}>
        <Dropdown.Item as="button">Pendiente</Dropdown.Item>
        <Dropdown.Item as="button">En curso</Dropdown.Item>
        <Dropdown.Item as="button">Aprobada</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default Buttons;
