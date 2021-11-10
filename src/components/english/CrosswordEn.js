// Components
import CrosswordInput from '../CrosswordInput';

// Styles
import '../../stylesheets/Crossword.scss';

const CrosswordEn = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="crossword">
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p01" id="p01" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md01" id="md01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md02" id="md02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md03" id="md03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md04" id="md04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md05" id="md05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md06" id="md06" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g01" id="g01" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p03" id="p03" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g02" id="g02" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p04" id="p04" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu01" id="bu01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu02" id="bu02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu03" id="bu03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu04" id="bu04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu05" id="bu05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu06" id="bu06" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu07" id="bu07" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu08" id="bu08" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__full" type="text" maxLength="1" value="E" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="S" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="I" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__full" type="text" maxLength="1" value="R" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="G" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="C" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__full2" type="text" maxLength="1" value="R" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__full" type="text" maxLength="1" value="C" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__full" type="text" maxLength="1" value="S" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__full" type="text" maxLength="1" value="L" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="O" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__full" type="text" maxLength="1" value="I" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="W" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="M" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__full2" type="text" maxLength="1" value="N" />
      <input className="crossword__full" type="text" maxLength="1" value="I" />
      <input className="crossword__full" type="text" maxLength="1" value="L" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />

      <input className="crossword__full" type="text" maxLength="1" value="N" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__full" type="text" maxLength="1" value="A" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
      <input className="crossword__empty" disabled="disabled" />
    </form>
  );
};

export default CrosswordEn;
