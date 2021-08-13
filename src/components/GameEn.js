// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';
const GameEn = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <h1 className="game__title">the game</h1>

        <ul className="game__lang">
          <li className="game__lang--en">
            <Link to="/aboutEn" title="english">
              En
            </Link>
          </li>
          <li className="game__lang--item">|</li>
          <li className="game__lang--es">
            <Link to="/aboutEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="game__description">
          <p className="game__description--p">
            <span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quibusdam
            nam voluptates numquam quaerat distinctio molestiae accusantium facilis corrupti omnis blanditiis sapiente,
            laudantium quod impedit sit tempora harum beatae aspernatur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint pariatur, possimus, eligendi dolorum, iure explicabo repellat ratione beatae ipsam
            maiores fugiat sequi architecto adipisci cumque temporibus perspiciatis repudiandae illo aperiam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis est illo deleniti ab quas incidunt ea quia
            sapiente officiis nisi fugit obcaecati, aspernatur velit accusamus quidem id sequi. Libero, laborum.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEn;
