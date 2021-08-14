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

        <ul className="game__lang">
          <li className="game__lang--en">
            <Link to="/gameEn" title="english">
              En
            </Link>
          </li>
          <li className="game__lang--item">|</li>
          <li className="game__lang--es">
            <Link to="/gameEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="game__description">
          <p className="game__description--p">
            <span className="bold"> SSH CAMBIOS xxxxxxxxxx</span>
            En el año 2020, una pandemia mundial paralizó todo el planeta. Desde entonces, los dueños de Rocky, por
            miedo a que se contagiara, le han encerrado en una casa abandonada cuya puerta se abre con una clave
            secreta. Una vez al día, le traen comida y agua. Rocky es un perro divertido y dicharachero al que le
            apasiona viajar por todo el mundo. Le encanta conocer nuevas culturas, hablar diferentes idiomas, charlar
            con animales salvajes y convivir con humanos amigables… No soporta más este encierro! Ayer compró unos
            billetes de avión para escapar de su cautiverio, lejos, muy lejos, pero no consigue descifrar la clave
            secreta que abre esa puerta y el avión despega en unas horas. Necesita tu ayuda! Tienes 60 minutos para
            averiguar todas las pistas que te llevarán a descubrir la clave, y abrir la puerta para que Rocky pueda
            escapar. Free Rocky!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEs;
