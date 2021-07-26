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
      <main className="clue01">
        <h1 className="clue01__title">primera hoja juego</h1>
        <h4 className="clue01__btn">
          <Link to="/" className="clue01__btn">
            go back
          </Link>
        </h4>
      </main>
      <Footer />
    </>
  );
};

export default Clue01;
