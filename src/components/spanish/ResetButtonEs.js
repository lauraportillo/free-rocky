// Styles
import '../../stylesheets/ResetButton.scss';

const ResetButtonEs = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button type="button" className="reset" onClick={handleReset}>
        🗑️ Borrar
      </button>
    </>
  );
};

export default ResetButtonEs;
