// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <nav className="headerNav">
      <ul className="headerNav__menu">
        <li className="headerNav__menu--item">
          <Link to="/">Home</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/game">The game</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/rocky">Rocky</Link>
        </li>
        <li className="headerNav__menu--item">|</li>
        <li className="headerNav__menu--item">
          <Link to="/author">Author</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;