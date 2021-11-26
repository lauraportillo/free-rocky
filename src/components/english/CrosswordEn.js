// Components
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
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.p01 === props.city[6].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="p01"
        id="p01"
        autoComplete="off"
      />
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
      <input
        onChange={handleChange}
        className={props.md03 === props.city[0].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md03"
        id="md03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.md04 === props.city[0].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md04"
        id="md04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.md05 === props.city[0].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md05"
        id="md05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.md06 === props.city[0].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="md06"
        id="md06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g01 === props.city[5].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g01"
        id="g01"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.p03 === props.city[6].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="p03"
        id="p03"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g02 === props.city[5].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g02"
        id="g02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.p04 === props.city[6].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="p04"
        id="p04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.bu01 === props.city[1].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu01"
        id="bu01"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu02 === props.city[1].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu02"
        id="bu02"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu03 === props.city[1].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu03"
        id="bu03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu04 === props.city[1].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu04"
        id="bu04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu05 === props.city[1].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu05"
        id="bu05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu06 === props.city[1].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu06"
        id="bu06"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu07 === props.city[1].letter7 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu07"
        id="bu07"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.bu08 === props.city[1].letter8 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="bu08"
        id="bu08"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.b02 === props.city[4].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="b02"
        id="b02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g04 === props.city[5].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g04"
        id="g04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.t02 === props.city[7].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="t02"
        id="t02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.b03 === props.city[4].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="b03"
        id="b03"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g05 === props.city[5].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g05"
        id="g05"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.ca01 === props.city[2].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca01"
        id="ca01"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca02 === props.city[2].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca02"
        id="ca02"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca03 === props.city[2].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca03"
        id="ca03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca04 === props.city[2].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca04"
        id="ca04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca05 === props.city[2].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca05"
        id="ca05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca06 === props.city[2].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca06"
        id="ca06"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.ca07 === props.city[2].letter7 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="ca07"
        id="ca07"
        autoComplete="off"
      />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.b04 === props.city[4].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="b04"
        id="b04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g06 === props.city[5].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g06"
        id="g06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.t04 === props.city[7].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="t04"
        id="t04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.b05 === props.city[4].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="b05"
        id="b05"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.g07 === props.city[5].letter7 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="g07"
        id="g07"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.mn01 === props.city[3].letter1 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn01"
        id="mn01"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.mn02 === props.city[3].letter2 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn02"
        id="mn02"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.mn03 === props.city[3].letter3 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn03"
        id="mn03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.mn04 === props.city[3].letter4 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn04"
        id="mn04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.mn05 === props.city[3].letter5 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn05"
        id="mn05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={props.mn06 === props.city[3].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="mn06"
        id="mn06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      <input
        onChange={handleChange}
        className={props.b06 === props.city[4].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="b06"
        id="b06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={props.t06 === props.city[7].letter6 ? 'crossword__correct' : 'crossword__full'}
        type="text"
        maxLength="1"
        name="t06"
        id="t06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
    </form>
  );
};
export default CrosswordEn;
