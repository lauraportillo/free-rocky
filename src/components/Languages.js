// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Languages.scss';

const Languages = () => {
  return (
    <ul className="lang">
      <li className="lang__en">
        <Link to="/" title="english">
          En
        </Link>
      </li>
      <li className="lang__item">|</li>
      <li className="lang__es">
        <Link to="/homeEs" title="español">
          Es
        </Link>
      </li>
    </ul>
  );
};

export default Languages;
