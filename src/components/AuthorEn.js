// Components
import HeaderEn from './HeaderEn';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';

const AuthorEn = (props) => {
  return (
    <div className="containerAuthor">
      <HeaderEn />
      <main className="containerMainAuthor">
        <div className="author">
          <h1 className="author__title">just me</h1>

          <section className="author__description">
            <p className="author__description--p">Hi there!</p>
            <p className="author__description--p">
              My name is Laura and I am a junior <span className="bold">Front-end Developer</span>. I am developing an
              Escape Room to continue practicing and improving my skills as a developer.
            </p>

            <p className="author__description--p">Code world is exciting 🚀🚀🚀🚀</p>

            <p className="author__description--p">
              The game is made with <span className="bold">React.js</span>, a <span className="bold">JavaScript</span>{' '}
              programming language library that <span className="bold">I love</span> and with which I would like to
              continue working in my next steps as a developer. I have also used the <span className="bold">Sass</span>{' '}
              preprocessor for styles, using variables, nesting, mixins ... reducing lines of code. I have used{' '}
              <span className="bold">Git</span> and made many branches to test functionalities before merging with the
              master.
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

            <p className="author__description--p">
              Suggestions or comments for <span className="bold">Free Rocky</span> are always welcome!
            </p>
            <p className="author__description--p">
              If you liked it, share it with your friends and more people will know Rocky story.
            </p>
            <p className="author__description--p">
              And if you would like to invite me to a coffee because you have really enjoyed the game and would like to
              give me a hand to continue with my dream, thank you in advance and click here 👇
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorEn;
