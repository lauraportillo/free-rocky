// Components
// import CrosswordInput from '../CrosswordInput';
import CrosswordInputDisabled from '../CrosswordInputDisabled';

// Styles
import '../../stylesheets/Crossword.scss';

const CrosswordEn = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    props.handleCrosswordInput(ev.target.name, ev.target.value);
  };

  return (
    <form onSubmit={handleForm} className="crossword">
      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="p01" id="p01" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}

      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
      <input
        onChange={handleChange}
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md01"
        id="md01"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.md02 === props.city[0].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md02"
        id="md02"
        autoComplete="off"
      />
      {/* <CrosswordInput
        className={props.md01 === 'm' ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md01={props.md01}
        city={props.city}
        name="md01"
        id="md01"
      /> */}

      {/* <CrosswordInput
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md02={props.md02}
        city={props.city}
        name="md02"
        id="md02"
      />
      <CrosswordInput
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md03={props.md03}
        city={props.city}
        name="md03"
        id="md03"
      />
      <CrosswordInput
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md04={props.md04}
        city={props.city}
        name="md04"
        id="md04"
      />
      <CrosswordInput
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md05={props.md05}
        city={props.city}
        name="md05"
        id="md05"
      />
      <CrosswordInput
        className={props.md01 === props.city[0].letter1 ? 'crossword__correct' : 'crossword__full'}
        handleCrosswordInput={props.handleCrosswordInput}
        md06={props.md06}
        city={props.city}
        name="md06"
        id="md06"
      /> */}
      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g01" id="g01" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="p03" id="p03" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
      {/* 
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g02" id="g02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="p04" id="p04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu01" id="bu01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu02" id="bu02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu03" id="bu03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu04" id="bu04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu05" id="bu05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu06" id="bu06" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu07" id="bu07" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="bu08" id="bu08" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="be02" id="be02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g04" id="g04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="t02" id="t02" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="be03" id="be03" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g05" id="g05" />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c01" id="c01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c02" id="c02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c03" id="c03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c04" id="c04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c05" id="c05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c06" id="c06" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="c07" id="c07" />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="be04" id="be04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g06" id="g06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="t04" id="t04" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="be05" id="be05" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="g07" id="g07" />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn01" id="mn01" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn02" id="mn02" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn03" id="mn03" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn04" id="mn04" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn05" id="mn05" />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="mn06" id="mn06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="be06" id="be06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInput handleCrosswordInput={props.handleCrosswordInput} city={props.city} name="t06" id="t06" />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
    </form>
  );
};
export default CrosswordEn;
