import '../stylesheets/ClueHeader.scss';

const ClueHeader = (props) => {
  return (
    <>
      <header className="clueHeader">
        <h1 className="clueHeader__title">free rocky!</h1>
        <div className="clueHeader__time">
          <h2 className="clueHeader__time--title">time remaining</h2>
          <div className="clueHeader__time--timer">00.00</div>
        </div>
      </header>
    </>
  );
};

export default ClueHeader;
