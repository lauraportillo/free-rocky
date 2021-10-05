import '../stylesheets/ClueHeader.scss';

const ClueHeaderEs = (props) => {
  return (
    <>
      <header className="clueHeaderContainer">
        <div className="clueHeader">
          <h1 className="clueHeader__title">free rocky!</h1>
          <div className="clueHeader__time">
            <h2 className="clueHeader__time--title">tiempo restante</h2>
            <div className="clueHeader__time--timer">00.00</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ClueHeaderEs;
