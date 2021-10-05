// React
import { Link } from 'react-router-dom';
// Components
import InstructionsHeader from '../InstructionsHeader';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Instructions.scss';

const InstructionsEs = (props) => {
  return (
    <div className="containerInstructions">
      <InstructionsHeader />
      <main className="containerMainInstructions">
        <div className="instructionsImage"></div>
        <div className="instructions">
          <h2 className="instructions__title">Ayuda a Rocky</h2>
          <h3 className="instructions__subtitle">
            instrucciones <span className="instructions__subtitle2">del</span> juego
          </h3>
          <p className="instructions__text--para">
            Estás a punto de dar la vuelta al mundo 🌍 buscando las claves que te harán descifrar la
            <span className="instructions__text--bold"> contraseña final</span> y liberar al fin a nuestro amigo.
          </p>
          <p className="instructions__text--para">
            Nos quedamos sin tiempo para que pueda coger su avión y
            <span className="instructions__text--bold"> escapar</span> del viejo caserón donde lleva encerrado durante
            toda la pandemia.
          </p>
          <p className="instructions__text--para">
            Si sientes pasión por los
            <span className="instructions__text--bold"> viajes y diferentes culturas</span>, esto será pan comido!
          </p>
          <p className="instructions__text--para">
            Algunas <span className="instructions__text--bold"> indicaciones</span> que puede te sirvan de ayuda para
            ejecutar la misión con éxito:
          </p>
          <p className="instructions__text--para">
            - El juego está pensado para que puedas jugar desde cualquier dispositivo.
          </p>
          <p className="instructions__text--para2">- Puedes jugar sólo o acompañado, eso depende de ti. </p>
          <p className="instructions__text--para2">
            - Puedes escribir las claves tanto en mayúsculas como en minúsculas, eso no será un problema.
          </p>
          <p className="instructions__text--para2">
            - Si la clave es correcta aparecerá en tu pantalla un mensaje que dirá “correcto” y el botón “Next” quedará
            habilitado para que pases a la siguiente pantalla.
          </p>
          <p className="instructions__text--para2">
            - Te recomiendo que tengas a mano papel y lápiz para tomar notas. Aunque si olvidas algo siempre podrás ir
            hacia atrás y navegar entre pantallas.
          </p>
          <p className="instructions__text--para">
            Date prisa, Rocky espera impaciente <span className="instructions__text--bold"> tu ayuda</span> para abrir
            la puerta!
          </p>
          <p className="instructions__text--para">
            Conoce un poco más sobre la historia de Rocky pinchando
            <Link to="/gameEn" className="instructions__text--link">
              👉 aqui
            </Link>
          </p>
        </div>

        <button className="instructionsBtn">
          <Link to="/clue01Es" className="instructionsBtn__link">
            Empezar
          </Link>
        </button>

        <nav className="instructionsNav">
          <ul className="instructionsNav__menu">
            <li>
              <Link to="/" className="instructionsNav__menu--item">
                Inicio
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <FooterBlack />
    </div>
  );
};

export default InstructionsEs;
