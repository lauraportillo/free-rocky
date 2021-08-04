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

      {/* <input
        onChange={handleChange}
        className="keyInput"
        autocomplete="off"
        type="text"
        name="input"
        id="input"
        placeholder="enter the clue..."
        value={props.input}
      /> */}
    </>
  );
};

export default Input;
