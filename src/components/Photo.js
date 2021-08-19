// React
import React, { useState } from 'react';
// Styles
import '../stylesheets/Photo.scss';

const Photo = (props) => {
  //state
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    setShowLetter(true);
  };

  return (
    <>
      <div className="photoPiece" id={props.photo.id} onClick={handleClick}>
        <img className="column__img" src={props.photo.image} alt="piece of clue" />
        <h3 className="column__letter">{showLetter ? props.photo.letter : null}</h3>
      </div>
    </>
  );
};

export default Photo;
