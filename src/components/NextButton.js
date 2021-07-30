import '../stylesheets/NextButton.scss';

const NextButton = (props) => {
  const handlePassword = (ev) => {
    props.handlePassword();
  };

  return (
    <>
      <button disabled={!props.enabled} handlePassword={handlePassword} className="next">
        Next
      </button>
    </>
  );
};

export default NextButton;
