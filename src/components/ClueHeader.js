import '../stylesheets/ClueHeader.scss';

const ClueHeader = (props) => {
  return (
    <>
      <header className="startHeader">
        <h1 className="startHeader__title">free rocky!</h1>
        <div className="startHeader__time">
          <h2 className="startHeader__time--title">time remaining</h2>
          <div className="startHeader__time--timer">00.00</div>
        </div>
      </header>
    </>
  );
};

export default ClueHeader;
