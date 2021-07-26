// React
import { Link } from 'react-router-dom';
// Components
import ClueHeader from './ClueHeader';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01 = (props) => {
  return (
    <>
      <ClueHeader />
      <main className="back">
        <h1 className="back">primera hoja del juego</h1>

        <h2 className="back">
          <Link to="/" className="back">
            go back
          </Link>
        </h2>
      </main>
      <Footer />
    </>
  );
};

export default Clue01;
