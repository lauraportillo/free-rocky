// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';

// NOTAS
// separar en parrafos y resaltar palabras importantes en negrita
// hacer un link con la dirección del repo

const AuthorEn = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages languageEn={props.languages[4]} languageEs={props.languages[5]} />

        <section className="author__description">
          <p className="author__description--p">Hi there! </p>
          <p className="author__description--p">
            My name is Laura and I am a junior <span className="bold">Front-end Developer</span>. I am developing an
            Escape room to continue practicing and improving my skills as a developer.
          </p>
          <p className="author__description--p">
            The game is made with React.js, a JavaScript programming language library that I love and with which I would
            like to continue working in my next steps as a developer. Code world is exciting 🚀🚀🚀🚀 I have also used
            the Sass preprocessor for styles, using variables, nesting, mixins ... reducing lines of code. I have used
            Git and made many branches to test functionalities before merging with the master branch.
          </p>

          <p className="author__description--p link">
            <a
              href="https://github.com/lauraportillo/free-rocky"
              target="_blank"
              rel="noopener noreferrer"
              title="github repo"
            >
              👉 Click here to visit GitHub repository
            </a>
          </p>

          <p className="author__description--p">Suggestions or comments for Free Rocky are always welcome!</p>
          <p className="author__description--p">
            If you liked it, share it with your friends and more people will know Rocky story.
          </p>
          <p className="author__description--p">
            And if you would like to invite me to a coffee because you have really enjoyed the game and would like to
            give me a hand to continue with my dream, thank you in advance and click here 👇
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEn;
