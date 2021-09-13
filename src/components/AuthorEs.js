// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';

// NOTAS
// REPASAR ESTE COMPONENTE EN CASTELLANO Y REVISAR CON EL INGLÉS

const AuthorEs = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages languageEn={props.languages[4]} languageEs={props.languages[5]} />

        <section className="author__description">
          <p className="author__description--p">Hola!</p>
          <p className="author__description--p">
            Mi nombre es Laura y soy <span className="bold">Front-end Developer</span> junior. Estoy desarrollando este
            Escape Room para seguir practicando y mejorando mis habilidades como programadora.
          </p>

          <p className="author__description--p">El mundo del código me resulta apasionante 🚀🚀🚀🚀</p>

          <p className="author__description--p">
            El juego está hecho con <span className="bold">React.js</span>, una Librería del lenguaje de programación
            <span className="bold"> JavaScript</span> que <span className="bold">me encanta</span> y con la que me
            gustaría seguir trabajando en mis siguientes pasos como developer. También he utilizado el preprocesador
            <span className="bold"> Sass</span> para los estilos, usando variables, anidaciones, mixins... reduciendo
            con ello líneas de código. He usado <span className="bold"> Git</span> y he hecho muchas ramas para ir
            probando funcionalidades antes de mergear con la rama máster.
          </p>

          <p className="author__description--p link">
            <a
              href="https://github.com/lauraportillo/free-rocky"
              target="_blank"
              rel="noopener noreferrer"
              title="github repo"
            >
              👉 Haz Click aqui para ver el repo en GitHub
            </a>
          </p>

          <p className="author__description--p">
            Sugerencias o comentarios para <span className="bold">Free Rocky</span> son siempre bienvenidos!
          </p>
          <p className="author__description--p">
            Si te ha gustado, comparte para que más gente conozca la historia de Rocky.
          </p>
          <p className="author__description--p">
            Y si quisieras invitarme a un café porque realmente has disfrutado con el juego y te gustaría echarme una
            mano para seguir adelante con mi sueño, mil gracias de antemano y pincha aquí 👇
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEs;
