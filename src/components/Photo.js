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

  return (
    <>
      <section>
        <div className="row1">
          <div className="divPadre1">
            <img className="divHijo1" src={one} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? '1' : null}</h3>
          </div>

          <div className="divPadre2">
            <img className="divHijo1" src={two} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? '2' : null}</h3>
          </div>

          <div className="divPadre3">
            <img className="divHijo1" src={three} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? '3' : null}</h3>
          </div>
        </div>

        <div>
          <img src={four} alt="piece of clue" />
          <img src={five} alt="piece of clue" />
          <img src={six} alt="piece of clue" />
        </div>

        <div>
          <img src={seven} alt="piece of clue" />
          <img src={eight} alt="piece of clue" />
          <img src={nine} alt="piece of clue" />
        </div>
      </section>
    </>
  );
};

export default Photo;
