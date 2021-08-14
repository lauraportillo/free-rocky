// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Languages.scss';

const Languages = (props) => {
  return (
    <ul className="lang">
      {/* <li className="lang__en">
        <Link to={props.languageEn} title="english">
          En
        </Link>
      </li>
      <li className="lang__item">|</li>
      <li className="lang__es">
        <Link to={props.languageEs} title="español">
          Es
        </Link>
      </li> */}
    </ul>
  );
};

export default Languages;
