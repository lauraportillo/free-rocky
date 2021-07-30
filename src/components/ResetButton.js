import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = (ev) => {
    props.handleReset();
  };

  return (
    <>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default ResetButton;
