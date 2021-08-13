// Styles
import '../stylesheets/Footer.scss';

const Footer = (props) => {
  return (
    <footer>
      <ul className="footer">
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="http://bilfrok.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="bilfrok.com"
          >
            Luis Yrisarry
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://www.artstation.com/bilfrok"
            target="_blank"
            rel="noopener noreferrer"
            title="artstation"
          >
            <i className="fa fa-artstation" aria-hidden="true"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://www.behance.net/Bilfrok"
            target="_blank"
            rel="noopener noreferrer"
            title="behance"
          >
            <i className="fab fa-behance" alt="behance icon"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://www.linkedin.com/in/bilfrok/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <i className="fa fa-linkedin" alt="linkedin icon"></i>
          </a>
        </li>
      </ul>
      {/* <div className="footer__copy">
        <a
          className="footer__copy--link"
          href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          By Laura Portillo
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
