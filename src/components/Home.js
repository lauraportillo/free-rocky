// React
import { Link } from 'react-router-dom';
// Components
import HeaderEn from './HeaderEn';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Home.scss';
// Images
import icon from '../images/home/button-white.png';

const Home = (props) => {
  return (
    <div className="containerHome">
      <HeaderEn />
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">free rocky!</h1>
        <Languages languageEn={props.languages[0]} languageEs={props.languages[1]} />
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
