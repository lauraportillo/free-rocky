// React
import { Link } from 'react-router-dom';
// Components
import InstructionsHeader from './InstructionsHeader';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Instructions.scss';

const InstructionsEs = (props) => {
  return (
    <div className="containerInstructions">
      <InstructionsHeader />
      <main className="containerMainInstructions">
        <div className="instructionsImage"></div>
        <div className="instructions">
          <h2 className="instructions__title">Help for Rocky</h2>
          <h3 className="instructions__subtitle"> game instructions</h3>
          <p className="instructions__text--para">
            You are about to go around the world 🌍 looking for the keys that will make you know the final
            <span className="instructions__text--bold"> password</span> to free our friend.
          </p>
          <p className="instructions__text--para">
            Rocky is running out of time to catch his plane and
            <span className="instructions__text--bold"> escape</span> from the old mansion where he has been locked up
            throughout the pandemic.
          </p>
          <p className="instructions__text--para">
            If you are passioned for <span className="instructions__text--bold"> trips and different cultures</span> ,
            this will be a piece of cake!
          </p>
          <p className="instructions__text--para">
            Some <span className="instructions__text--bold"> indications</span> that will help you to execute the
            mission successfully:
          </p>
          <p className="instructions__text--para">- You can play from any device </p>
          <p className="instructions__text--para2">- You can play alone or with friends, that depends on you</p>
          <p className="instructions__text--para2">
            - You can write the keys in both uppercase and lowercase, that will not be a problem
          </p>
          <p className="instructions__text--para2">
            - If the password is correct, a message will appear on your screen and it will say "correct" and the "Next"
            button will be enabled for you to go to the next screen.
          </p>
          <p className="instructions__text--para2">
            - I recommend you taking paper and pencil to write notes. Although if you forget something you can always go
            back and navigate between screens.
          </p>
          <p className="instructions__text--para">
            Hurry up, Rocky is waiting impatiently for <span className="instructions__text--bold"> your help</span> to
            open the door!
          </p>
          <p className="instructions__text--para">
            Get to know a little more about Rocky's history by clicking
            <Link to="/gameEn" className="instructions__text--link">
              👉 here
            </Link>
          </p>
        </div>

        <button className="instructionsBtn">
          <Link to="/clue01En" className="instructionsBtn__link">
            Start
          </Link>
        </button>

        <nav className="instructionsNav">
          <ul className="instructionsNav__menu">
            <li>
              <Link to="/" className="instructionsNav__menu--item">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <FooterBlack />
    </div>
  );
};

export default InstructionsEs;
