// Styles
import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleClue01({
      key: 'clue01',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        className="keyInput"
        autocomplete="off"
        type="text"
        name="clue01"
        id="clue01"
        placeholder="enter the clue..."
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
