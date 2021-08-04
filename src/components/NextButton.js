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
          <h3 className="next">Correcto ✔</h3>
        </>
      );
    } else if (props.input.length === 0) {
      return (
        <>
          <div className="hidden" />
        </>
      );
    } else {
      return (
        <>
          <h3 className="next">Incorrecto ❌</h3>
        </>
      );
    }
  };

  return (
    <>
      <button
        disabled={props.input.toLowerCase() === props.password ? null : true}
        onClick={() => history.push(props.route)}
        className="next"
      >
        Next
      </button>

      <div>{renderMessage()}</div>
      {/* <div className={`next ${props.hiddenClass}`}>{renderMessage()}</div> */}
    </>
  );
};

export default NextButton;
