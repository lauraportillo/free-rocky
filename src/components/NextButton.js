// React
import { useHistory } from 'react-router-dom';
// Styles
import '../stylesheets/NextButton.scss';

const NextButton = (props) => {
  const history = useHistory();

  const renderMessage = () => {
    if (props.input.toLowerCase() === props.password) {
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
        disabled={props.input.toLowerCase() === props.password ? null : true}
        onClick={() => history.push('/clue02')}
        input={props.input}
        className="next"
      >
        Next
      </button>

      <div className={`next ${props.hiddenClass}`}>{renderMessage()}</div>
    </>
  );
};

export default NextButton;
