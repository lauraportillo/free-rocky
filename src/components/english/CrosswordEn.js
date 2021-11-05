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
        <input className="crossword__full" type="text" disabled="disabled" maxLength="1" value="P" />
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
        <input className="crossword__full" type="text" disabled="disabled" maxLength="1" value="M" />
      </div>
    </>
  );
};

export default CrosswordEn;
