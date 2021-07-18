import React from 'react';
import '../stylesheets/Home.scss';
import rocky from '../images/rocky-1-320.png';
import icon from '../images/start-button.jpg';

const Home = (props) => {
  return (
    <article className="home">
      <div className="home__image">
        <div className="home__image--rocky"></div>
      </div>
      <h1 className="home__title">free rocky</h1>
      <button className="home__btn">
        <img className="home__btn--img" src={icon} alt="start button" />
      </button>
    </article>
  );
};

export default Home;
