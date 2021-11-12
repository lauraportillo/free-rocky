const CrosswordInput = (props) => {
  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };
  return (
    <>
      <input
        onChange={handleChange}
        // className="crossword__full"
        className={props.md01 === 'm' ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name={props.name}
        id={props.name}
        value={props.value}
        autoComplete="off"
      />
    </>
  );
};

export default CrosswordInput;
