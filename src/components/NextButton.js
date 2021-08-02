// Styles
import '../stylesheets/NextButton.scss';

const NextButton = (props) => {
  const handleNext = (ev) => {
    props.handleNext();
  };

  const renderMessage = () => {
    const password = 'pepino';
    if (props.clue01 === password) {
      return (
        <>
          <h3 className="next">Correcto</h3>
        </>
      );
    } else {
      return (
        <>
          <h3 className="next">Incorrecto</h3>
        </>
      );
    }
  };

  return (
    <>
      <button
        disabled={props.clue01 === 'pepino' ? null : true}
        onClick={handleNext}
        clue01={props.clue01}
        className="next"
      >
        Next
      </button>

      <div className={`next ${props.hiddenClass}`}>{renderMessage()}</div>
    </>
  );
};

export default NextButton;
