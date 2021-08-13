// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEs = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <ul className="author__lang">
          <li className="author__lang--en">
            <Link to="/authorEn" title="english">
              En
            </Link>
          </li>
          <li className="author__lang--item">|</li>
          <li className="author__lang--es">
            <Link to="/authorEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="author__description">
          <p className="author__description--p">
            <span className="bold">Lorem</span> TEXTO EN CASTELLANO
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEs;
