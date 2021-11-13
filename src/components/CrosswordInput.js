const CrosswordInput = (props) => {
  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };

  const madrid = props.md01 + props.md02 + props.md03 + props.md04 + props.md05 + props.md06;
  // const madrid = props.md01;

  return (
    <>
      <input
        onChange={handleChange}
        // className="crossword__full"
        className={madrid === 'MADRID' ? 'crossword__correct' : 'crossword__full'}
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
