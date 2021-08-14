// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Languages.scss';

const Languages = (props) => {
  return (
    <ul className="lang">
      <li className="lang__en">
        <Link to="/gameEn" title="english">
          En
        </Link>
      </li>
      <li className="lang__item">|</li>
      <li className="lang__es">
        <Link to="/gameEs" title="español">
          Es
        </Link>
      </li>
    </ul>
  );
};

export default Languages;

// meter por props las direcciones de los links
