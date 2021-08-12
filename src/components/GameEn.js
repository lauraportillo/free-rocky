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
        <p className="game__description">
          Rocky is not a regular dog.It is a very special dog. It is a Bulldog with a beautiful face, like a cuddly
          teddy bear. The perfect dog that everyone would want to live with. Rocky seems completely real, however he is
          not flesh and blood, he is a 3d modelled dog, the work of the great artist Luis Yrisarry Labadía. Luis is a 3d
          Artist and Art Director specialized in Characters and Digital Sculpture, with such an incredible talent. Thank
          you Luis for lend me Rocky as protagonist of this great adventure! Luis Yrisarry Labadía
        </p>
      </main>
      <Footer />
    </>
  );
};

export default GameEn;
