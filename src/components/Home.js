// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Home.scss';
// Images
import icon from '../images/start-button.jpg';

const Home = (props) => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">free rocky</h1>
        <button className="home__btn">
          <img className="home__btn--img" src={icon} alt="start button" />
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Home;
