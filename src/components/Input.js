// Styles
import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };
  return (
    <>
      <input
        onChange={handleChange}
        className={`keyInput ${props.className}`}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        autocomplete="off"
      />
    </>
  );
};

export default Input;
