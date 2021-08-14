// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';
const GameEn = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <h1 className="game__title">the game</h1>

        <ul className="game__lang">
          <li className="game__lang--en">
            <Link to="/gameEn" title="english">
              En
            </Link>
          </li>
          <li className="game__lang--item">|</li>
          <li className="game__lang--es">
            <Link to="/gameEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="game__description">
          <p className="game__description--p">
            In 2020 a global pandemic paralyzed the entire world. Since then, Rocky's owners, out of fear that he will
            catch the virus, locked him in an abandoned house whose door is opened with a secret password.
          </p>
          <p className="game__description--p">Once a day, they bring him food and water.</p>
          <p className="game__description--p">
            Rocky is a fun and talkative dog who loves to travel around the world. He loves knowing new cultures,
            speaking different languages, chatting with wild animals and living with friendly humans… He can't stand
            this confinement anymore!
          </p>
          <p className="game__description--p">
            Yesterday he bought some tickets to escape from that house, far, far away, but he cannot guess the secret
            password that opens the door, and the plane takes off in a few hours.
          </p>
          <p className="game__description--p bold">Rocky needs your help!</p>
          <p className="game__description--p">
            You have 60 minutes to find out all the clues that will lead you to discover the key. Open the door and let
            Rocky escape.
          </p>
          <p className="game__description--p bold">Free Rocky!</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEn;
