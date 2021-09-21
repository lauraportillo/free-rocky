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
          <Link to="/gameEn">The game</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/rockyEn">Rocky</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/authorEn">Author</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderEn;
