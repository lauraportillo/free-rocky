// React
import { Link } from 'react-router-dom';
// Components
import InstructionsHeader from './InstructionsHeader';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Instructions.scss';

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
            You are about to go around the world 🌍 looking for the keys that will make you know the final
            <span className="instructions__text--bold"> password</span> to free our friend.
          </p>
          <p className="instructions__text--para">
            Rocky is running out of time to catch his plane and
            <span className="instructions__text--bold"> escape</span> from the old mansion where he has been locked up
            throughout the pandemic.
          </p>
          <p className="instructions__text--para">
            If you are passioned for <span className="instructions__text--bold"> trips and different cultures</span> ,
            this will be a piece of cake!
          </p>
          <p className="instructions__text--para">
            Some <span className="instructions__text--bold"> indications</span> that will help you to execute the
            mission successfully:
          </p>
          <p className="instructions__text--para">- You can play from any device </p>
          <p className="instructions__text--para2">- You can play alone or with friends, that depends on you</p>
          <p className="instructions__text--para2">
            - You can write the keys in both uppercase and lowercase, that will not be a problem
          </p>
          <p className="instructions__text--para2">
            - If the password is correct, a message will appear on your screen and it will say "correct" and the "Next"
            button will be enabled for you to go to the next screen.
          </p>
          <p className="instructions__text--para2">
            - I recommend you taking paper and pencil to write notes. Although if you forget something you can always go
            back and navigate between screens.
          </p>
          <p className="instructions__text--para">
            Hurry up, Rocky is waiting impatiently for <span className="instructions__text--bold"> your help</span> to
            open the door!
          </p>
          <p className="instructions__text--para">
            Get to know a little more about Rocky's history by clicking
            <Link to="/gameEn" className="instructions__text--link">
              👉 here
            </Link>
            <p className="instructions__text--para">
              Estás a punto de dar la vuelta al mundo 🌍 buscando las claves que te harán descifrar la contraseña final
              y liberar al fin al nuestro amigo. Nos quedamos sin tiempo para que pueda coger su avión y escapar del
              viejo caserón donde lleva encerrado durante toda la pandemia. Si sientes pasión por los viajes y
              diferentes culturas, esto será pan comido! Algunas indicaciones que puede te sirvan de ayuda para ejecutar
              la misión con éxito: - El juego está pensado para que puedas jugar desde cualquier dispositivo - Puedes
              jugar sólo o acompañado, eso depende de ti - Puedes escribir las claves tanto en mayúsculas como en
              minúsculas, eso no será un problema - Si la clave es correcta aparecerá en tu pantalla un mensaje que dirá
              “correcto” y el botón “Next” quedará habilitado para que pases a la siguiente pantalla. - Te recomiendo
              que tengas a mano papel y lápiz para tomar notas. Aunque si olvidas algo siempre podrás ir hacia atrás y
              navegar entre pantallas. Date prisa, Rocky espera impaciente tu ayuda para abrir la puerta! (foto de Rocky
              corriendo) Conoce a un poco más sobre la historia de Rocky 👉 pinchando aqui
            </p>
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
                Home
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
