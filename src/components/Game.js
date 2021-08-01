// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';

const Game = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quibusdam nam voluptates numquam quaerat
          distinctio molestiae accusantium facilis corrupti omnis blanditiis sapiente, laudantium quod impedit sit
          tempora harum beatae aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur,
          possimus, eligendi dolorum, iure explicabo repellat ratione beatae ipsam maiores fugiat sequi architecto
          adipisci cumque temporibus perspiciatis repudiandae illo aperiam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis est illo deleniti ab quas incidunt ea quia sapiente officiis nisi fugit obcaecati,
          aspernatur velit accusamus quidem id sequi. Libero, laborum.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Game;
