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
      <section className="photo">
        <div className="row">
          <div className="row__c1">
            <img src={one} alt="piece of clue" className="row__c1--img" onClick={handleClick} />
            <h3 className="row__c1--text1">{props.showLetter ? '1' : null}</h3>
          </div>
          <div className="row__c2">
            <img src={two} alt="piece of clue" className="row__c2--img row__c2--piece" />
          </div>
          <div className="row__c3">
            <img src={three} alt="piece of clue" className="row__c3--img" />
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
