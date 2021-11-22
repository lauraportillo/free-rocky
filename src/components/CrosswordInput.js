const CrosswordInput = (props) => {
  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };
  console.log(props.city);
  // IDEA DE HACER UN JSON PARA PASAR TODO POR PROPS
  // cómo sumar resultado de inputs para que sean igual a una palabra

  return (
    <>
      <input
        onChange={handleChange}
        // className="crossword__full"
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
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
