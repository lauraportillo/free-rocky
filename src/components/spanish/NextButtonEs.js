// React
import { useHistory } from 'react-router-dom';
// Styles
import '../../stylesheets/NextButton.scss';

const NextButtonEs = (props) => {
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
    } else if (props.input.length > 4) {
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
        Siguiente
      </button>

      <div>{renderMessage()}</div>
    </>
  );
};

export default NextButtonEs;
