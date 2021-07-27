// React
import { Link } from 'react-router-dom';
// Components
import ClueHeader from './ClueHeader';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue02.scss';

const Clue02 = (props) => {
  return (
    <>
      <ClueHeader />
      <main className="clue02">
        <h1 className="clue02__title">segunda hoja juego</h1>

        <h4 className="clue02__btn">
          <Link to="/clue01" className="clue02__btn">
            go back
          </Link>
        </h4>
      </main>
      <Footer />
    </>
  );
};

export default Clue02;
