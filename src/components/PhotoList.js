// Components
import Photo from './Photo';
// Styles
import '../stylesheets/PhotoList.scss';

const PhotoList = (props) => {
  const renderPhoto = props.photos.map((photo) => {
    return (
      <li key={photo.id.toString()}>
        <Photo photo={photo} password={props.password} />
      </li>
    );
  });

  return (
    <>
      <ul className="photoList">{renderPhoto}</ul>
    </>
  );
};

export default PhotoList;
