// React
import { useHistory } from 'react-router-dom';
// Styles
import '../stylesheets/NextButton.scss';

const NextButton = (props) => {
  const history = useHistory();

  const password = 'pepino';

  const renderMessage = () => {
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
        disabled={props.clue01 === password ? null : true}
        onClick={() => history.push('/clue02')}
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
