// Styles
import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleInput({
      key: 'input',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        onChange={handleChange}
        className={`keyInput ${props.className}`}
        autocomplete="off"
        type={props.type}
        name={props.input}
        id={props.input}
        placeholder={props.placeholder}
        value={props.input}
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
