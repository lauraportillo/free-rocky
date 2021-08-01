import '../stylesheets/NextButton.scss';

const NextButton = (props) => {
  const handleClue01 = (ev) => {
    props.handleClue01();
  };

  const renderMessage = () => {
    const password = 'clave';
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
        disabled={props.clue01 === 'clave' ? null : true}
        onClick={handleClue01}
        clue01={props.clue01}
        className="next"
      >
        {/* <button disabled={!props.enabled} onClick={handlePassword} clue01={props.clue01} className="next"> */}
        Next
      </button>

      <div className={`next ${props.hiddenClass}`}>{renderMessage()}</div>
    </>
  );
};

export default NextButton;
