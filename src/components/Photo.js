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
  console.log(password01);

  return (
    <>
      <section className="containerPhoto">
        <div className="row1">
          <div className="divPadre1">
            <img className="divHijo1" src={one} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[0] : null}</h3>
          </div>

          <div className="divPadre2">
            <img className="divHijo1" src={two} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[1] : null}</h3>
          </div>

          <div className="divPadre3">
            <img className="divHijo1" src={three} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[2] : null}</h3>
          </div>
        </div>

        <div className="row2">
          <div className="divPadre1">
            <img className="divHijo1" src={four} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[3] : null}</h3>
          </div>

          <div className="divPadre2">
            <img className="divHijo1" src={five} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[4] : null}</h3>
          </div>

          <div className="divPadre3">
            <img className="divHijo1" src={six} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[5] : null}</h3>
          </div>
        </div>

        <div className="row3">
          <div className="divPadre1">
            <img className="divHijo1" src={seven} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[6] : null}</h3>
          </div>

          <div className="divPadre2">
            <img className="divHijo1" src={eight} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[7] : null}</h3>
          </div>

          <div className="divPadre3">
            <img className="divHijo1" src={nine} alt="piece of clue" onClick={handleClick} />
            <h3 className="divHijo2">{props.showLetter ? password01[8] : null}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
