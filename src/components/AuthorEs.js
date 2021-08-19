// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEs = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages languageEn={props.languages[4]} languageEs={props.languages[5]} />

        <section className="author__description">
          <p className="author__description--p">
            Hola! Mi nombre es Laura y soy <span className="bold">Front-end Developer</span> junior. Estoy desarrollando
            este Escape room para seguir practicando y mejorando mis habilidades como programadora. El juego está hecho
            con React.js, una Librería del lenguaje de programación JavaScript que me encanta y con la que me gustaría
            seguir trabajando en mis siguientes pasos como developer. El mundo del código me resulta apasionante
            🚀🚀🚀🚀 También he utilizado el preprocesador Sass para los estilos, usando variables, anidaciones,
            mixins... reduciendo con ello líneas de código. He usado Git y he hecho muchas ramas para ir probando
            funcionalidades antes de mergear con la rama máster. Puedes ver el repositorio de GitHub en este enlace:
            https://github.com/lauraportillo/free-rocky Sugerencias o comentarios para Free Rocky son siempre
            bienvenidos! Si te ha gustado, comparte para que más gente conozca la historia de Rocky. Y si quisieras
            invitarme a un café porque realmente has disfrutado con el juego y te gustaría echarme una mano para seguir
            adelante con mi sueño pincha aquí 👇 y mil gracias de antemano:
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEs;
