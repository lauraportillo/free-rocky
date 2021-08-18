// Styles
import '../stylesheets/Photo.scss';

const Photo = (props) => {
  const handleClick = (ev) => {
    props.handlePhoto(photoId);
    // props.handleClick();
  };
  console.log(handleClick);

  const password01 = Array.from(props.password[0]);

  const photoId = props.photos.map((photo) => photo.id);
  console.log(photoId);

  return (
    <>
      <section className="containerPhoto">
        <div className="row1">
          <div className="column1">
            <img className="column__img" src={props.photos[0].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[0] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={props.photos[1].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[1] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={props.photos[2].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[2] : null}</h3>
          </div>
        </div>

        <div className="row2">
          <div className="column1">
            <img className="column__img" src={props.photos[3].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[3] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={props.photos[4].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[4] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={props.photos[5].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[5] : null}</h3>
          </div>
        </div>

        <div className="row3">
          <div className="column1">
            <img className="column__img" src={props.photos[6].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[6] : null}</h3>
          </div>

          <div className="column2">
            <img className="column__img" src={props.photos[7].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[7] : null}</h3>
          </div>

          <div className="column3">
            <img className="column__img" src={props.photos[8].image} alt="piece of clue" onClick={handleClick} />
            <h3 className="column__letter">{props.showLetter ? password01[8] : null}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
