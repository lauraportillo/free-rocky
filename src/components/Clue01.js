// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01 = (props) => {
  return (
    <>
      <div className="back">
        <h1>primera hoja del juego</h1>

        <h2>
          <Link to="/">go back</Link>
        </h2>
      </div>
    </>
  );
};

export default Clue01;
