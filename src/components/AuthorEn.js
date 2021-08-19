// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEn = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages languageEn={props.languages[4]} languageEs={props.languages[5]} />

        <section className="author__description">
          <p className="author__description--p">
            Hi there! My name is Laura and I am a junior <span className="bold">Front-end Developer</span>. I am
            developing an Escape room to continue practicing and improving my skills as a developer. The game is made
            with React.js, a JavaScript programming language library that I love and with which I would like to continue
            working in my next steps as a developer. Code world is exciting 🚀🚀🚀🚀 I have also used the Sass
            preprocessor for styles, using variables, nesting, mixins ... reducing lines of code. I have used Git and
            made many branches to test functionalities before merging with the master branch. GitHub repository here:
            https://github.com/lauraportillo/free-rocky Suggestions or comments for Free Rocky are always welcome! If
            you liked it, share it with your friends and more people will know Rocky story. And if you would like to
            invite me to a coffee because you have really enjoyed the game and would like to give me a hand to continue
            with my dream, click here 👇 and thank you in advance:
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEn;
