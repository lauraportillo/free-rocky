const CrosswordInputCorrect = (props) => {
  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };
  return (
    <>
      <input
        onChange={handleChange}
        className="crossword__correct"
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

export default CrosswordInputCorrect;
