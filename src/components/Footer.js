// Styles
import '../stylesheets/Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__copy">
        <a
          className="footer__copy--link"
          href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          By Laura Portillo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
