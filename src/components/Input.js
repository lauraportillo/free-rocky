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
        className="keyInput"
        autocomplete="off"
        type="text"
        name="input"
        id="input"
        placeholder="enter the clue..."
        value={props.input}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
