// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Home.scss';
// Images
import icon from '../images/home/button-white.png';

const Home = (props) => {
  return (
    <div className="containerHome">
      <Header />
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">free rocky!</h1>
        <button className="home__btn">
          <Link to="/clue01">
            <img className="home__btn--img" src={icon} alt="start button" />
          </Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
