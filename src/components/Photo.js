// Styles
import '../stylesheets/Photo.scss';

const Photo = (props) => {
  const handleClick = (ev) => {
    props.handlePhoto(props.photo.id);
  };

  return (
    <>
      <div className="photoPiece" id={props.photo.id} onClick={handleClick}>
        <img className="column__img" src={props.photo.image} alt="piece of clue" />
        <h3 className="column__letter">{props.showLetter ? props.photo.letter : null}</h3>
      </div>
    </>
  );
};

export default Photo;
