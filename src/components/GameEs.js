// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';
const GameEs = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <h1 className="game__title">the game</h1>

        {/* aqui van los idiomas */}

        <section className="game__description">
          <p className="game__description--p">
            En el año 2020, una pandemia mundial paralizó todo el planeta. Desde entonces, los dueños de Rocky, por
            miedo a que se contagiara, le han encerrado en una casa abandonada cuya puerta se abre con una clave
            secreta.
          </p>
          <p className="game__description--p">Una vez al día, le traen comida y agua.</p>
          <p className="game__description--p">
            Rocky es un perro divertido y dicharachero al que le apasiona viajar por todo el mundo. Le encanta conocer
            nuevas culturas, hablar diferentes idiomas, charlar con animales salvajes y convivir con humanos amigables…
            No soporta más este encierro!
          </p>
          <p className="game__description--p">
            Ayer compró unos billetes de avión para escapar de su cautiverio, lejos, muy lejos, pero no consigue
            descifrar la clave secreta que abre esa puerta y el avión despega en unas horas.
          </p>
          <p className="game__description--p bold">Rocky necesita tu ayuda!</p>
          <p className="game__description--p">
            Tienes 60 minutos para averiguar todas las pistas que te llevarán a descubrir la clave, y abrir la puerta
            para que Rocky pueda escapar.
          </p>
          <p className="game__description--p bold">Free Rocky!</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEs;
