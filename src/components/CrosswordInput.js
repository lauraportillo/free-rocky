const CrosswordInput = (props) => {
  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };
  return (
    <>
      <input
        onChange={handleChange}
        className="crossword__full"
        type="text"
        maxLength="1"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        autoComplete="off"
      />
    </>
  );
};

export default CrosswordInput;
