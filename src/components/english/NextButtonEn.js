// React
import { useHistory } from 'react-router-dom';
// Styles
import '../../stylesheets/NextButton.scss';

const NextButtonEn = (props) => {
  const history = useHistory();

  const renderMessage = () => {
    if (props.input.toLowerCase() === props.password) {
      return (
        <>
          <p className="message">
            <span className="message__boldGreen">Correct</span> ✔
          </p>
        </>
      );
    } else if (props.input.length === 0) {
      return (
        <>
          <div className="hidden" />
        </>
      );
    } else if (props.input.length > 4) {
      return (
        <>
          <p className="message">
            <span className="message__boldGreen">Wrong X</span> X ❌
          </p>
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
    </>
  );
};

export default NextButtonEn;
