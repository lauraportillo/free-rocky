// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Header.scss';

const HeaderEn = (props) => {
  return (
    <nav className="headerNav">
      <ul className="headerNav__menu">
        <li className="headerNav__menu--item">
          <Link to="/">Home</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/gameEs">El juego</Link>
        </li>
        e<li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/rockyEs">Rocky</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/authorEs">Autor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderEn;
