// React
import { Link } from 'react-router-dom';
// Components
import InstructionsHeaderEn from './InstructionsHeaderEn';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Instructions.scss';

const InstructionsEn = (props) => {
  return (
    <div className="containerInstructions">
      <InstructionsHeaderEn />
      <main className="containerMainInstructions">
        <div className="instructions">
          <h2 className="instructions__title">Help for Rocky</h2>
          <h3 className="instructions__subtitle"> game instructions</h3>
          <p className="instructions__text--para">
            You are about to go around the world 🌍 looking for the keys that will make you know the final password to
            free our friend.
          </p>
          <p className="instructions__text--para">
            Rocky is running out of time to catch his plane and escape from the old mansion where he has been locked up
            throughout the pandemic.
          </p>
          <p className="instructions__text--para">
            If you are passioned for trips and different cultures, this will be a piece of cake!
          </p>
          <p className="instructions__text--para">
            Some indications that will help you to execute the mission successfully:
          </p>
          <p className="instructions__text--para">
            - You can play from any device - You can play alone or with friends, that depends on you
          </p>
          <p className="instructions__text--para">
            - You can write the keys in both uppercase and lowercase, that will not be a problem
          </p>
          <p className="instructions__text--para">
            - If the password is correct, a message will appear on your screen and it will say "correct" and the "Next"
            button will be enabled for you to go to the next screen.
          </p>
          <p className="instructions__text--para">
            - I recommend you taking paper and pencil to write notes. Although if you forget something you can always go
            back and navigate between screens.
          </p>
          <p className="instructions__text--para">
            Hurry up, Rocky is waiting impatiently for your help to open the door! (photo of Rocky running)
          </p>
          <div className="instructions__image"></div>
          <p className="instructions__text--para">
            Get to know a little more about Rocky's history 👉 by clicking here
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

export default InstructionsEn;
