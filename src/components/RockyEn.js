// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Rocky.scss';
const RockyEn = (props) => {
  return (
    <>
      <Header />
      <main className="rocky">
        <h1 className="rocky__title">rocky dog</h1>

        <ul className="rocky__lang">
          <li className="rocky__lang--en">
            <Link to="/aboutEn" title="english">
              En
            </Link>
          </li>
          <li className="rocky__lang--item">|</li>
          <li className="rocky__lang--es">
            <Link to="/aboutEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="rocky__description">
          <p className="rocky__description--p">
            Rocky is not a regular dog.It is a very special dog. It is a Bulldog with a beautiful face, like a cuddly
            teddy bear. The perfect dog that everyone would want to live with.
          </p>
          <p className="rocky__description--p">
            <span className="bold">Rocky</span> seems completely real, however it is not flesh and blood, he is a
            <span className="bold">3d modelled dog</span>, the work of the great artist
            <span className="bold">Luis Yrisarry Labadía</span>.
          </p>
          <p className="rocky__description--p">
            Luis is a 3d Artist and Art Director specialized in Characters and Digital Sculpture, with such an
            incredible talent.
          </p>
          <p className="rocky__description--p">
            Thank you Luis for lend me Rocky as protagonist of this great adventure!
          </p>
        </section>

        <ul className="menu">
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="http://bilfrok.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="bilfrok.com"
            >
              Luis Yrisarry
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.artstation.com/bilfrok"
              target="_blank"
              rel="noopener noreferrer"
              title="artstation"
            >
              <i className="fa fa-artstation" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.behance.net/Bilfrok"
              target="_blank"
              rel="noopener noreferrer"
              title="behance"
            >
              <i className="fab fa-behance" alt="behance icon"></i>
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.linkedin.com/in/bilfrok/"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
            >
              <i className="fa fa-linkedin" alt="linkedin icon"></i>
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default RockyEn;