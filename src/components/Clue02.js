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
        <h1 className="clue02__title">segunda</h1>
        <nav className="clue02Nav">
          <ul className="clue02Nav__menu">
            <li>
              <Link to="/" className="clue02Nav__menu--item">
                Home
              </Link>
            </li>
            <li className="clue02Nav__menu--item">|</li>
            <li>
              <Link to="/clue01" className="clue02Nav__menu--item">
                Go back
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Clue02;
