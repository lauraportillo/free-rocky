// Components
import CrosswordInput from '../CrosswordInput';
import CrosswordInputDisabled from '../CrosswordInputDisabled';

// Styles
import '../../stylesheets/Crossword.scss';

const CrosswordEn = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="crossword">
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p01" id="p01" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput
        handleCrosswordInput={props.handleCrosswordInput}
        renderInput={props.renderInput}
        name="md01"
        id="md01"
      />
      {/* <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md01" id="md01" /> */}
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md02" id="md02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md03" id="md03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md04" id="md04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md05" id="md05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="md06" id="md06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g01" id="g01" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p03" id="p03" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g02" id="g02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="p04" id="p04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu01" id="bu01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu02" id="bu02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu03" id="bu03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu04" id="bu04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu05" id="bu05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu06" id="bu06" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu07" id="bu07" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="bu08" id="bu08" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="be02" id="be02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g04" id="g04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="t02" id="t02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="be03" id="be03" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g05" id="g05" />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c01" id="c01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c02" id="c02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c03" id="c03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c04" id="c04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c05" id="c05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c06" id="c06" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="c07" id="c07" />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="be04" id="be04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g06" id="g06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="t04" id="t04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="be05" id="be05" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="g07" id="g07" />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn01" id="mn01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn02" id="mn02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn03" id="mn03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn04" id="mn04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn05" id="mn05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="mn06" id="mn06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="be06" id="be06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} name="t06" id="t06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
    </form>
  );
};

export default CrosswordEn;
