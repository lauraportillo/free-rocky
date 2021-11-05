// Styles
import '../../stylesheets/Crossword.scss';

const CrosswordEn = (props) => {
  return (
    <>
      <div className="crossword">
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__full" type="text" maxLength="1" value="P" />
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
        <input className="crossword__full" type="text" maxLength="1" value="M" />
        <input className="crossword__full" type="text" maxLength="1" value="A" />
        <input className="crossword__full" type="text" maxLength="1" value="D" />
        <input className="crossword__full" type="text" maxLength="1" value="R" />
        <input className="crossword__full" type="text" maxLength="1" value="I" />
        <input className="crossword__full" type="text" maxLength="1" value="D" />
        <input className="crossword__empty" disabled="disabled" />
        <input className="crossword__empty" disabled="disabled" />
      </div>
    </>
  );
};

export default CrosswordEn;
