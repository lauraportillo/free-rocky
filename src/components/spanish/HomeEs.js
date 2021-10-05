// React
import { Link } from 'react-router-dom';
// Components
import HeaderEs from './HeaderEs';
import Languages from '../Languages';
import Footer from '../Footer';
// Styles
import '../../stylesheets/Home.scss';
// Images
import icon from '../../images/home/button-white.png';

const HomeEs = () => {
  return (
    <div className="containerHome">
      <HeaderEs />
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">free rocky!</h1>
        <Languages />
        <button className="home__btn">
          <Link to="/instructionsEs">
            <img className="home__btn--img" src={icon} alt="start button" />
          </Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default HomeEs;
