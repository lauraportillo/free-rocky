// Images
import one from '../images/01clue/mobile/one.jpg';
import two from '../images/01clue/mobile/two.jpg';

// Styles
import '../stylesheets/Photo.scss';

const Photo = (props) => {
  return (
    <>
      <div>
        <img src={one} alt="piece of clue" />
        <img src={two} alt="piece of clue" />
      </div>
    </>
  );
};

export default Photo;
