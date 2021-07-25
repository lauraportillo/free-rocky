// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01 = (props) => {
  return (
    <>
      <div className="back">
        <h1 className="back">primera hoja del juego</h1>

        <h2 className="back">
          <Link to="/" className="back">
            go back
          </Link>
        </h2>
      </div>
    </>
  );
};

export default Clue01;
