// Images Mobile
import one from '../images/01clue/mobile/one.jpg';
import two from '../images/01clue/mobile/two.jpg';
import three from '../images/01clue/mobile/three.jpg';
import four from '../images/01clue/mobile/four.jpg';
import five from '../images/01clue/mobile/five.jpg';
import six from '../images/01clue/mobile/six.jpg';
import seven from '../images/01clue/mobile/seven.jpg';
import eight from '../images/01clue/mobile/eight.jpg';
import nine from '../images/01clue/mobile/nine.jpg';

// Styles
import '../stylesheets/Photo.scss';

const Photo = (props) => {
  const handleClick = (ev) => {
    props.handleClick();
  };
  let password01 = Array.from(props.password[0]);

  return (
    <>
      <section className="containerPhoto">
        <div className="row1">
          <div className="column1">
            <img className="column__img" src={one} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[0] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={two} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[1] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={three} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[2] : null}</h3>
          </div>
        </div>

        <div className="row2">
          <div className="column1">
            <img className="column__img" src={four} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[3] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={five} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[4] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={six} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[5] : null}</h3>
          </div>
        </div>

        <div className="row3">
          <div className="column1">
            <img className="column__img" src={seven} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[6] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={eight} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[7] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={nine} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[8] : null}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
