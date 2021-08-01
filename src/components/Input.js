import '../stylesheets/Input.scss';

const Input = (props) => {
  const handleChange = (ev) => {
    console.log('input', ev.target.value);
    // console.log(ev.target.value);
    props.handleClue01({
      key: 'clue01',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        className="keyInput"
        type="text"
        name="clue01"
        id="clue01"
        placeholder="enter the clue..."
        value={props.clue01}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
