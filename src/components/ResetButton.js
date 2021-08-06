// Styles
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button className="reset" onClick={handleReset}>
        🗑️ Reset
      </button>
    </>
  );
};

export default ResetButton;
