import React from 'react';
import '../stylesheets/Home.scss';
import rocky from '../images/rocky-1-320.png';
import icon from '../images/start-button.jpg';

const Home = (props) => {
  return (
    <article className="home">
      <div>
        <img src={rocky} alt="dog rocky" />
      </div>
      <h1>free rocky</h1>
      <button>
        <img src={icon} alt="start button" />
      </button>
    </article>
  );
};

export default Home;
