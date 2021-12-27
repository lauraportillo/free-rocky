// React
import { Link } from 'react-router-dom';
// Styles
import '../../stylesheets/Clue02.scss';

const Clue02NextStepEn = (props) => {
  return (
    <section className="clue02__text">
      <p className="clue02__text--para1">You have solved it easily, right?</p>
      <p className="clue02__text--para1">
        Now take a good look at everything that the crossword shows to you, because it hides the postal code of the
        museum's location.
      </p>
      <p className="clue02__text--para1">Find out the following code:</p>
      <p className="clue02__text--para1">5 + 6 + number of W + 7 + 8 + number of A</p>
      <p className="clue02__text--help">
        <Link to="/help02En">
          🔎 <span className="clue02__text--paraBoldGray">Clues!</span>
        </Link>
      </p>
    </section>
  );
};

export default Clue02NextStepEn;
